import type { FromSchema } from "json-schema-to-ts";
import positionProperties from "./positionSchema";

export const positionCreateBodySchema = {
    type: "object",
    properties: positionProperties,
    required: ["name", "timeToGet", "timeToStay", "position"],
    additionalProperties: false,
} as const;

export interface PositionCreateRequest {
    Body: FromSchema<typeof positionCreateBodySchema>;
}

export default {
    description: "Post a new position",
    tags: ["user"],
    summary: "Post",
    body: positionCreateBodySchema,
    response: {
        201: {
            description: "Successful response",
            type: "object",
            properties: positionProperties,
        },
    },
};
