import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { IAuthTokenAction, IAuthTokenState } from "./auth.interface";
import { EProvider } from "./provider.interface";

export class MonitoringParams {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(IAuthTokenAction)
    action: IAuthTokenAction;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(EProvider)
    provider: EProvider;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEnum(IAuthTokenState)
    status: IAuthTokenState;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description: string;
}
