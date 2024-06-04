import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Permissions } from '../auth.enum';
import { PERMISSION_KEY } from '../decorators/permission.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermission = this.reflector.get<Permissions>(PERMISSION_KEY, context.getHandler());
        if (!requiredPermission) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const [resource, action] = requiredPermission.split("_")

        if (user.role.name === "SUPER_ADMIN" || user.role.name === "ADMIN") {
            return true
        }

        const userPermissions = user.roles.rolePermissions.resource
        if (resource.toLowerCase() !== userPermissions.toLowerCase) {
            return false
        }
        return userPermissions["can_" + action]
    }
}