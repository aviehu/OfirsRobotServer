import { PrismaClient } from '@prisma/client'

export default async function removePosition(position: number) {
    const Prisma = new PrismaClient()
    await Prisma.positions.delete({
        where: {
            position
        }
    })
    return { ok: 1 }
}
