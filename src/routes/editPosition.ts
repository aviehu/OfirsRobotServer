import type { FastifyReply, FastifyRequest } from "fastify";
import { Route } from "../../types";
import dbEditPosition from '../dbOperations/editPosition'
import editPositionSchema, {PositionEditRequest} from "../schemas/editPosition";

async function handler(
    req: FastifyRequest<PositionEditRequest>,
    reply: FastifyReply
) {
    const { body } = req;
    const {oldPosition, newPosition} = body
    try {
        const result = await dbEditPosition(oldPosition, newPosition);
        reply.status(200).send(result);
    } catch (error) {
        reply.status(500).send(error)
    }
}

const editPosition: Route<PositionEditRequest> = {
    handler,
    schema: editPositionSchema,
};

export default editPosition;
