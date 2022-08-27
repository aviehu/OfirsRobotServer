import type { FromSchema } from "json-schema-to-ts";
import positionProperties from "./positionSchema";

export const positionEditBodySchema = {
    type: "object",
    properties: {
        oldPosition: { type: "integer" },
        newPosition: { type: "integer" }
    },
    required: ["oldPosition", "newPosition"],
    additionalProperties: false,
} as const;

export interface PositionEditRequest {
    Body: FromSchema<typeof positionEditBodySchema>;
}

export default {
    description: "Post a new position",
    tags: ["user"],
    summary: "Post",
    body: positionEditBodySchema,
    response: {
        201: {
            description: "Successful response",
            type: "object",
            properties: positionProperties,
        },
    },
};
