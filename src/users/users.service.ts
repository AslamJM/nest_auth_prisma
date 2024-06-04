import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
    constructor(
        private dbService: DbService
    ) {
    }

    async findOne(id: number) {
        const user = await this.dbService.user.findFirstOrThrow({
            where: { id },
            include: {
                role: {
                    include: {
                        rolePermissions: true
                    }
                }
            }
        })
        return user
    }

    async findByUsername(username: string) {
        const user = await this.dbService.user.findFirstOrThrow({
            where: {
                username
            }
        })

        return user
    }
}
