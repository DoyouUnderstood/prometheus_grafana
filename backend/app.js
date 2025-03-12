
const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { message: 'Fastify fonctionne !' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
    console.log('Fastify fonctionne sur http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()

