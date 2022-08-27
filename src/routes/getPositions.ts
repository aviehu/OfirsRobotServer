import type { FastifyReply, FastifyRequest } from "fastify";
import { Route } from "../../types";
import dbGetPositions from "../dbOperations/getPositions";
import  GetPositionsSchema ,{ GetPositionsRequest } from "../schemas/getPositions";

async function handler(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {
        const result = await dbGetPositions();
        reply.status(200).send(result);
    } catch (error) {
        reply.status(500).send('Something went wrong')
    }
}

const getPosition: Route<GetPositionsRequest> = {
    handler,
    schema: GetPositionsSchema,
};

export default getPosition;