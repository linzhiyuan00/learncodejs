const koa = require('./lib/applictioon');
const app = new koa();

app.listen(3000,() =>{
  console.log('server is running 3000');
})