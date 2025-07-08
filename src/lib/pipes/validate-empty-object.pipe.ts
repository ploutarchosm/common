import { BadRequestException, PipeTransform } from '@nestjs/common';
import { isEmpty } from 'lodash';

export class ValidateEmptyObjectPipe implements PipeTransform<any> {
    private readonly acceptEmpty: boolean;

    constructor(acceptEmpty?: boolean) {
        this.acceptEmpty = acceptEmpty;
    }

    transform(value: any) {
        if (isEmpty(value)) {
            if (!this.acceptEmpty) {
                throw new BadRequestException(`Empty object is not acceptable`);
            }
        }
        return value;
    }
}
