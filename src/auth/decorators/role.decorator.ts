import { SetMetadata } from '@nestjs/common';
import { PermissionResources } from '@prisma/client';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: PermissionResources[]) => SetMetadata(ROLES_KEY, roles);