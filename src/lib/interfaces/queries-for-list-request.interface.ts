import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsOptional
} from 'class-validator';

export class QueriesForListRequest {
    @ApiProperty()
    @IsDefined()
    take: number;

    @ApiProperty()
    @IsDefined()
    skip: number;

    @ApiProperty()
    @IsOptional()
    search: string;
}
