import type { FastifyReply, FastifyRequest } from "fastify";
import { Route } from "../../types";
import dbAddPosition from "../dbOperations/addPosition";
import addPositionSchema, {PositionCreateRequest} from '../schemas/addPosition'

async function handler(
    req: FastifyRequest<PositionCreateRequest>,
    reply: FastifyReply
) {
    const { body } = req;
    const {name, position, timeToGet, timeToStay } = body
    try {
        const result = await dbAddPosition(name, timeToGet, timeToStay, position);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(500).send('Something went wrong')
    }
}

const addPosition: Route<PositionCreateRequest> = {
    handler,
    schema: addPositionSchema,
};

export default addPosition;
