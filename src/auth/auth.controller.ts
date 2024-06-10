import { Body, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { SignInDto } from './dto/SignInDto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { Response } from 'express';
import { RefreshGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post("login")
    async login(
        @Body() dto: SignInDto,
        @Res({ passthrough: true }) res: Response
    ) {

        try {
            const { access_token, refresh_token, user } = await this.authService.signIn(dto.username, dto.password)
            res.cookie('refresh_token', refresh_token, { httpOnly: true })
            return { access_token, user }
        } catch (error) {
            throw new UnauthorizedException()
        }
    }
    @UseGuards(RefreshGuard)
    @Post("refresh")
    async refresh(
        @Req() req
    ) {
        try {
            const access_token = await this.authService.refresh(req.user)
            return { access_token, user: req.user }
        } catch (error) {
            throw new UnauthorizedException()
        }
    }

    @UseGuards(AuthGuard)
    @Get("profile")
    profile(
        @Req() req: any
    ) {
        try {
            return this.authService.profile(req.user.id)
        } catch (error) {
            return error
        }
    }


    @Post("logout")
    async logout(
        @Res({ passthrough: true }) res: Response,
    ) {
        try {
            res.clearCookie('refresh_token')
            return {
                success: true
            }
        } catch (error) {
            throw error
        }
    }
}
