import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsOptional, IsEnum } from 'class-validator';

/**
 * A DTO representing data to be sent when getting a customer record.
 */

export class MessageDTO {
    @ApiProperty({ description: 'registrationToken', })
    @IsNotEmpty()
    token: string;

    @ApiProperty({ description: 'notification title' })
    @IsNotEmpty()
    title: string;
    
    @ApiProperty({ description: 'notification message' })
    @IsNotEmpty()
    message: string;
}
