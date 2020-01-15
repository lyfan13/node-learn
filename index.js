const Koa = require('koa')
const Router = require('koa-router');
const cors = require('@koa/cors');
// const bodyParser = require('koa-bodyparser');

const app = new Koa()
const router = new Router()

app.use(cors());
// app.use(bodyParser());
router.get('/test',(ctx,next)=>{
  ctx.body = {name:'zhangsan',age:12};
  ctx.status = 200
  console.log(ctx)
  next()
})
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(4000)
console.log('server is listening:4000')