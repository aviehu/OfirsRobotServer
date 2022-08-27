import positionProperties from "./positionSchema";
import type { FromSchema } from "json-schema-to-ts";

export interface GetPositionsRequest {
    Body: FromSchema<{}>;
}

export default {
    description: "Get positions",
    tags: ["user"],
    summary: "Get",
    response: {
        200: {
            description: "Successful response",
            type: "array",
            items: {
                type: "object",
                properties: positionProperties,
            },
        },
    },
};
