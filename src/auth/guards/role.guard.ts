import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/role.decorator';
import { PermissionResources } from '@prisma/client';
import { AblityFactory, CASLActions } from 'src/casl/ablity.factory';
import { AuthHelpers } from '../auth.helper';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector,
        private abilityFactory: AblityFactory,
        private authHelpers: AuthHelpers
    ) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<PermissionResources[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles) {
            return true;
        }

        const { user, method, } = context.switchToHttp().getRequest();

        if (user.role.name === "SUPER_ADMIN") {
            return true
        }

        const action = this.authHelpers.getAbilityAction(method)
        const ability = this.abilityFactory.defineAbility(user)

        for (const role of requiredRoles) {
            if (ability.can(action, role)) {
                return true
            }
        }

        return false


    }
}