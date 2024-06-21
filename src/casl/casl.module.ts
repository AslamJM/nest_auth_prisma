import { Global, Module } from '@nestjs/common';
import { AblityFactory } from './ablity.factory';

@Global()
@Module({
    providers: [AblityFactory],
    exports: [AblityFactory]
})
export class CaslModule { }
