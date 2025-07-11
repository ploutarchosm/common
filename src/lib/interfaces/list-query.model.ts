import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsOptional
} from 'class-validator';

export class CListQuery {
    @ApiProperty()
    @IsDefined()
    take: number;

    @ApiProperty()
    @IsDefined()
    skip: number;

    @ApiProperty()
    @IsOptional()
    search?: string;
}
