// 单点入口
const routesHelloHapi = require('./routes/hello-hapi')
const routesShop = require('./routes/shops')
const routesOrders = require('./routes/orders')
const config = require('./config')
const Hapi = require('hapi');
const pluginHapiSwagger = require('./plugins/hapi-swagger')
const server = new Hapi.Server();
server.connection(
    {
        port: config.port,
        host: config.host
    }
)

const init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([
        ...routesHelloHapi,
        ...routesShop,
        ...routesOrders
    ])
    await server.start();
    console.log(`server running at: ${server.info.uri}`)
}
init();
