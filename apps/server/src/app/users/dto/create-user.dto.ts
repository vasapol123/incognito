import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUser } from '@incognito/interface';

export class CreateUserDto implements CreateUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hashedPassword: string;

  @IsString()
  @IsNotEmpty()
  hashedRefreshToken?: string;
}
