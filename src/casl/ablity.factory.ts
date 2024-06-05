import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/users/user.entity";
import { AbilityBuilder, AbilityClass, InferSubjects, PureAbility } from '@casl/ability'
import { PermissionResources } from "@prisma/client";

export enum CASLActions {
    Manage = "manage",
    Create = "create",
    Read = "view",
    Update = "update",
    Delete = "delete"
}

export type Subjects = PermissionResources
export type AppAbility = PureAbility<[CASLActions, Subjects]>

@Injectable()
export class AblityFactory {
    defineAbility(user: UserEntity) {
        const { can, build } = new AbilityBuilder(PureAbility as AbilityClass<AppAbility>)

        const permissions = user.role.rolePermissions

        if (user.role.name === "SUPER_ADMIN") {
            can(CASLActions.Manage, "all")
        }
        else {
            permissions.forEach(per => {
                if (per.can_create) {
                    can(CASLActions.Create, per.resource)
                }

                if (per.can_edit) {
                    can(CASLActions.Update, per.resource)
                }

                if (per.can_delete) {
                    can(CASLActions.Delete, per.resource)
                }

                if (per.can_view) {
                    can(CASLActions.Read, per.resource)
                }
            })
        }

        return build()

    }
}
