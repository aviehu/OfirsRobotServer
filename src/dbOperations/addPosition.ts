import { PrismaClient } from '@prisma/client'

export default async function addPosition(name: number, timeToGet: number, timeToStay: number, position: number ) {
    const Prisma = new PrismaClient()
    return await Prisma.positions.create({
        data: {
            name,
            timeToGet,
            timeToStay,
            position
        }
    })
}
