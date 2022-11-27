export interface CreateUser {
  provider?: string;
  providerId?: string;
  email: string;
  hashedPassword?: string;
  hashedRefreshToken?: string;
}
