const https=require('https');
const cheerio = require('cheerio');
const url = 'https://www.mi.com/p/9285.html';
const imageDir='./saveimage/';
const fs=require('fs');
const path=require('path');
const moviesDir='./xiaomiData/';

function getdata(start){
  https.get(url,(res)=>{
    // 源源不断收到数据
    let html=''
    res.on('data',(chunk)=>{
      html+=chunk;
    });
    res.on('end',()=>{
      // console.log(html);
      const $ = cheerio.load(html);
      // let movies = [];
      $('.figure').each(function(){
        // 限制 第一个参数的选择区域 默认是全局
        const picUrl=$('.exposure img').attr('src');
        // const title=$('.info .title',this).text();
        // const star=$('.star .rating_num',this).text()
        // const link=$('.hd a',this).attr('href');
        // const movie={
        //   title,
        //   star,
        //   link,
        //   picUrl
        // }
        // movies.push(movie);
        // console.log(movies);
        console.log(picUrl);
        downloadImage(picUrl);
      })
      // saveLocalData(start / 25,movies);
    })
  })
}
function downloadImage(picUrl){
  https.get(picUrl,(res)=>{
    res.setEncoding('binary');
    let data=''
    res.on('data',(chunk)=>{
      data+=chunk
    })
    res.on('end',()=>{
      const fileName=path.basename(picUrl);
      fs.writeFile(imageDir+fileName,data,'binary',(err)=>{
        if(!err){
          console.log(fileName,'保存成功');
        }
      })
    })
  })
}
getdata();