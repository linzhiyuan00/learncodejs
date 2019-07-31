const express = require('express')
const fs = require('fs') //可以读取文件
const router = express.Router()

// 获取首页路由
router.get('/',function(req,res,next){
    // res.statusCdode === 200
    // res.setHeader('Content-type','application/json')
    function readImage(path,res){
        fs.readFile(path,'binary',function(err,file){
            if(err){
                return
            }else{
                console.log('输出文件')
                res.writeHead(200,{'Content-Type':'image/jpeg'})
                res.write(file,'binary')
                res.end()
            }
        })
    }
    readImage('/public/images/head.jpeg',res)
})

module.exports = router
