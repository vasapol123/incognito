import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
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
