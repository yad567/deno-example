import { Application, Router } from './dependencies.ts'

const app = new Application();
const router = new Router()

router.get('/', (ctx) => {
  ctx.response.body = "welcome babe"
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 4000 })