import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException,
    HttpStatus,
    BadRequestException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError(err => throwError(() => {

                    if (err instanceof BadRequestException) {
                        return new HttpException(err, HttpStatus.BAD_REQUEST)
                    }

                    if (err instanceof PrismaClientKnownRequestError) {
                        return new HttpException(err.message, HttpStatus.BAD_REQUEST)
                    }

                    if (err instanceof PrismaClientValidationError) {
                        return new HttpException(err.message, HttpStatus.BAD_REQUEST)
                    }

                    return new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR)
                })),
            );
    }
}