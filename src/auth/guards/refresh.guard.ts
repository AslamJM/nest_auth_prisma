import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RefreshGuard implements CanActivate {
    constructor(private jwtService: JwtService,
        private userService: UsersService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const token = this.extractTokenFromCookies(request);

        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: 'secret'
                }
            );
            const user = await this.userService.findOne(payload.sub)

            if (!user) {
                throw new UnauthorizedException()
            }

            request['user'] = user
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromCookies(request: Request): string | undefined {
        const token = request.cookies['refresh_token']
        return token
    }
}