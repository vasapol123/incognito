export interface CreateUser {
  email: string;
  hashedPassword: string;
  hashedRefreshToken?: string;
}
