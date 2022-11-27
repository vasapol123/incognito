import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';

import { UsersService } from '../../../users/users.service';

@Injectable()
export class GoogleOauthStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly config: ConfigService, // private readonly usersService: UsersService,
  ) {
    super({
      clientID: config.get<string>('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: config.get<string>('GOOGLE_OAUTH_CLIENT_SECRET'),
      callbackURL: config.get<string>('GOOGLE_OAUTH_REDIRECT_URL'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    console.log(profile);
    const { id, emails, provider } = profile;
    const user = {
      provider,
      providerId: id,
      email: emails[0].value,
    };
    done(null, user);
  }
}
