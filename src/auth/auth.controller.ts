import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { SignInDto } from './dto/SignInDto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post("login")
    login(
        @Body() dto: SignInDto
    ) {
        try {
            return this.authService.signIn(dto.username, dto.password)
        } catch (error) {
            return error
        }
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    profile(
        @Request() req: any
    ) {
        try {
            return this.authService.profile(req.user.sub)
        } catch (error) {
            return error
        }
    }
}
