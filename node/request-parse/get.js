// http
const http = require('http');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
    // 自己的 服务器
    if(req.url == '/favicon.ico') return;
    //把url 解析成一个对象
    const reqObj = url.parse(req.url);
    //把 url 请求在 query属性
    const queryObj = qs.parse(reqObj.query);
    console.log('正在请求', queryObj);
    res.writeHead(200,{
      // 'Content'
    })
    res.end(JSON.stringify(queryObj));
}).listen(3000, ()=>{
    console.log('服务正在 3000 端口运行');
})
