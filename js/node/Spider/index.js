const https=require('https');
const cheerio = require('cheerio');
const url = 'https://movie.douban.com/top250';
const imageDir='./math/';
const fs=require('fs');
const path=require('path');
const moviesDir='./doubanMoviesData/';
function doSpider(start){
  https.get(url+`?start=${start}`,(res)=>{
    // 源源不断收到数据
    let html=''
    res.on('data',(chunk)=>{
      html+=chunk;
    });
    res.on('end',()=>{
      // console.log(html);
      const $ = cheerio.load(html);
      let movies = [];
      $('.item').each(function(){
        // 限制 第一个参数的选择区域 默认是全局
        const picUrl=$('.pic img',this).attr('src');
        const title=$('.info .title',this).text();
        const star=$('.star .rating_num',this).text()
        const link=$('.hd a',this).attr('href');
        const movie={
          title,
          star,
          link,
          picUrl
        }
        movies.push(movie);
        console.log(movies);
        downloadImage(picUrl);
      })
      saveLocalData(start / 25,movies);
    })
  })
}
function saveLocalData(pageNum,movies){
  fs.writeFile(moviesDir+`data${pageNum}.json`,JSON.stringify(movies),(err)=>{
    if(!err){
      console.log('保存成功');
    }
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
const total = 250;
let start = 0;
while(start<total){
  doSpider(start);
  start+=25;

}
