import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string) {
        try {
            const user = await this.userService.findByUsername(username)


            if (!user || user.password !== pass) {
                throw new UnauthorizedException()
            }
            const { password, ...result } = user

            const payload = {
                sub: result.id,
                username: result.username
            }

            const token = await this.jwtService.signAsync(payload)

            return {
                access_token: token
            }
        } catch (error) {
            return error
        }
    }

    async profile(id: number) {

        try {
            const user = await this.userService.findOne(id)
            return user
        } catch (error) {
            return error
        }
    }
}
