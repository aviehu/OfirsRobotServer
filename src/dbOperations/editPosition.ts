import { PrismaClient } from '@prisma/client'

export default async function editPosition(oldPosition: number, newPosition: number) {
    const Prisma = new PrismaClient()
    const oldP = 1001
    const newP = 1002
    await Prisma.positions.update({
        where: {
          position: oldPosition
        },
        data: {
            position: oldP
        }
    })
    await Prisma.positions.update({
        where: {
            position: newPosition
        },
        data: {
            position: newP
        }
    })
    await Prisma.positions.update({
        where: {
            position: oldP
        },
        data: {
            position: newPosition
        }
    })
    await Prisma.positions.update({
        where: {
            position: newP
        },
        data: {
            position: oldPosition
        }
    })
    return { ok: 1 }
}
