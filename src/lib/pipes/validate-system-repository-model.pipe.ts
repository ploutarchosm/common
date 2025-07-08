import { ParseObjectIdPipe } from "./parse-objectId.pipe";
import { ArgumentMetadata, ForbiddenException, Inject, PipeTransform } from "@nestjs/common";
import { Types } from "mongoose";
import { ConfigService } from "@nestjs/config";

export class ValidateSystemRepositoryModelPipe
    extends ParseObjectIdPipe
    implements PipeTransform<string, Promise<Types.ObjectId>>
{

    private forbidden: Types.ObjectId[];

    constructor(@Inject(ConfigService) private readonly configService: ConfigService) {
        super();
        this.initializeForbiddenIds();
    }

    private initializeForbiddenIds(): void {
        // Get the forbidden IDs from config as string (comma-separated)
        const forbiddenIdsString = this.configService.get<string>('FORBIDDEN_REPOSITORY_IDS', '');

        // Parse the string into an array of ObjectIds
        this.forbidden = forbiddenIdsString
            .split(',')
            .map(id => id.trim())
            .filter(id => id && Types.ObjectId.isValid(id))
            .map(id => new Types.ObjectId(id));
    }

    async transform(
        value: any,
        metadata: ArgumentMetadata,
    ): Promise<Types.ObjectId> {
        const objectId = await super.transform(value, metadata);

        // Check if the ObjectId is in the forbidden list
        const isForbidden = this.forbidden.some(
            forbiddenId => forbiddenId.equals(objectId)
        );

        if (isForbidden) {
            throw new ForbiddenException(
                'Validation failed, you cannot delete system item',
            );
        }

        return objectId;
    }
}
