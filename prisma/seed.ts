import { PermissionResources, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    const superAdmin = await prisma.role.create({
        data: {
            name: "SUPER_ADMIN",
            description: "super admin",
            rolePermissions: {
                create: {
                    resource: PermissionResources.all,
                    can_create: true,
                    can_delete: true,
                    can_edit: true,
                    can_view: true
                }
            }
        }
    })

    const labStoreKeeper = await prisma.role.create({

        data: {
            name: "LAB_STORE_KEEPER",
            description: "lab store keeper",
            rolePermissions: {
                create: {
                    resource: PermissionResources.lab_all,
                    can_create: true,
                    can_delete: true,
                    can_edit: true,
                    can_view: true
                }
            }
        }
    })

    const pharmacy = await prisma.role.create({


        data: {
            name: "PHARMACY_STORE_KEEPER",
            description: "pharmacy store keeper",
            rolePermissions: {
                create: [
                    {
                        resource: PermissionResources.pharmacy_all,
                        can_create: true,
                        can_delete: true,
                        can_edit: true,
                        can_view: true
                    }
                ],

            }
        }
    })


    const superuser = await prisma.user.upsert({
        where: { username: "super" },
        update: {},
        create: {
            username: 'super',
            password: '123456',
            email: 'supr@email.com',
            phone: "phone123",
            full_name: "super user",
            role_id: superAdmin.id
        }
    })

    const labuser = await prisma.user.upsert({
        where: { username: "labuser" },
        update: {},
        create: {
            username: 'labuser',
            password: '123456',
            email: 'labuser@email.com',
            phone: "labuser123",
            full_name: "labuser user",
            role_id: labStoreKeeper.id
        }
    })

    const pharma = await prisma.user.upsert({
        where: { username: "pharmauser" },
        update: {},
        create: {
            username: 'pharmauser',
            password: '123456',
            email: 'pharmauser@email.com',
            phone: "pharmauser123",
            full_name: "pharmauser user",
            role_id: pharmacy.id
        }
    })

    console.log(superuser, labuser, pharma);


}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })