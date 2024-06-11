import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
    constructor(
        private dbService: DbService
    ) {
    }

    async all() {
        try {
            const users = await this.dbService.user.findMany({
                include: {
                    role: {
                        include: {
                            rolePermissions: true
                        }
                    }
                }
            })
            return users
        } catch (error) {
            throw error
        }
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
            },
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

    async create(input: Prisma.UserCreateInput) {
        try {

            const created = await this.dbService.user.create({
                data: input
            })
            return await this.findOne(created.id)
        } catch (error) {
            throw error
        }
    }
}
