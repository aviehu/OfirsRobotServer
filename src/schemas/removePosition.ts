import type { FromSchema } from "json-schema-to-ts";
import positionProperties from "./positionSchema";

export const positionRemoveBodySchema = {
    type: "object",
    properties: {
        position: { type: "integer"}
    },
    required: ["position"],
    additionalProperties: false,
} as const;

export interface PositionRemoveRequest {
    Body: FromSchema<typeof positionRemoveBodySchema>;
}

export default {
    description: "delete a position",
    tags: ["user"],
    summary: "Post",
    body: positionRemoveBodySchema,
    response: {
        201: {
            description: "Successful response",
            type: "object",
            properties: {
                ok: { type: "integer" }
            },
        },
    },
};
