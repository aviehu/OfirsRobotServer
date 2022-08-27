const positionProperties = {
    name: { type: "integer"},
    timeToGet: { type: "integer"},
    timeToStay: { type: "integer"},
    position: { type: "integer"},
} as const;

export default positionProperties;
