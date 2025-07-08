import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException,
} from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe
    implements PipeTransform<string, Promise<Types.ObjectId>>
{

    transform(value: string, metadata: ArgumentMetadata) {
        if (!Types.ObjectId.isValid(value)) {
            throw new BadRequestException(`${value} is not a valid MongoDB ObjectId`);
        }
        try {
            return Promise.resolve(new Types.ObjectId(value));
        } catch (error) {
            throw new BadRequestException(`${value} is not a valid MongoDB ObjectId`);
        }
    }
}
