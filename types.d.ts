import type { RouteShorthandOptionsWithHandler } from "fastify";
import type {
    RawReplyDefaultExpression,
    RawRequestDefaultExpression,
    RawServerDefault,
} from "fastify/types/utils";

export type Route<R> = RouteShorthandOptionsWithHandler<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    R
    >;
