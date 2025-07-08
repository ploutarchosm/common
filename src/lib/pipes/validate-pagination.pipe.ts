import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidatePaginationPipe implements PipeTransform {
    transform(value: any): any {
        const num = parseInt(value);
        if (isNaN(num) || num < 0) {
            throw new BadRequestException(
                `Pagination value must be >= 0, got: ${value}`,
            );
        }
        return num;
    }
}
