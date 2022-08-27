import fastify from 'fastify'
import getPositions from "./src/routes/getPositions";
import addPosition from "./src/routes/addPosition";
import removePosition from "./src/routes/removePosition";
import editPosition from "./src/routes/editPosition";

const server = fastify()

server.get('/', getPositions)
server.post('/', addPosition)
server.delete('/', removePosition)
server.patch('/', editPosition)

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})