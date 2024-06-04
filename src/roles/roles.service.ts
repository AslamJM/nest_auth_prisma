import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class RolesService {
    constructor(
        private db: DbService
    ) {
    }

    async getAllRoles() {
        const roles = await this.db.role.findMany({
            include: {
                rolePermissions: true
            }
        })
        return roles
    }

}
