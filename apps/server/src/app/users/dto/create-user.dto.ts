import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUser } from '@incognito/interface';

export class CreateUserDto implements CreateUser {
  @IsString()
  provider?: string;

  @IsString()
  providerId?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  hashedPassword?: string;

  @IsString()
  hashedRefreshToken?: string;
}
