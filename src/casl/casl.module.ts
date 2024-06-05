import { Module } from '@nestjs/common';
import { AblityFactory } from './ablity.factory';

@Module({
    providers: [AblityFactory],
    exports: [AblityFactory]
})
export class CaslModule { }
