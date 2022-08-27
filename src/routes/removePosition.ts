import type { FastifyReply, FastifyRequest } from "fastify";
import { Route } from "../../types";
import dbRemovePosition from '../dbOperations/removePosition'
import removePositionSchema, { PositionRemoveRequest } from '../schemas/removePosition'

async function handler(
    req: FastifyRequest<PositionRemoveRequest>,
    reply: FastifyReply
) {
    const { body } = req;
    const { position } = body
    try {
        const result = await dbRemovePosition(position);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(500).send('Something went wrong')
    }
}

const removePosition: Route<PositionRemoveRequest> = {
    handler,
    schema: removePositionSchema,
};

export default removePosition;
