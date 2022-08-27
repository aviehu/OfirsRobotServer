import { PrismaClient } from '@prisma/client'

export default async function getPositions() {
    const Prisma = new PrismaClient()

    return await Prisma.positions.findMany({
        orderBy: [ {position: "asc"} ],
    });
}
