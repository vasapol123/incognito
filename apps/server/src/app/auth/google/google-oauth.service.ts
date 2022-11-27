import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { UsersService } from '../../users/users.service';
import { Tokens } from '../tokens/interface/tokens.interface';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class GoogleOauthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokensService: TokensService,
  ) {}

  public async signinGoogle(userDto): Promise<Tokens> {
    let user: User | undefined;

    user = await this.usersService.findUserByEmail(userDto.email);

    if (!user) {
      user = await this.usersService.createUser({
        provider: userDto.provider,
        providerId: userDto.providerId,
        email: userDto.email,
      });
    }

    const tokens = await this.tokensService.getTokens(user.id, user.email);
    await this.tokensService.updateRefreshToken(
      user.id,
      tokens.jwtRefreshToken,
    );

    return tokens;
  }
}
