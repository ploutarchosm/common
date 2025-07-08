import { PipeTransform } from '@nestjs/common';

export class CleanObjectIdPipe implements PipeTransform<any> {
    transform(value: any) {
        delete value.id;
        return value;
    }
}
