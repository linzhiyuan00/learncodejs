  export default URL = {
  // 猫眼首页电影列表
  // http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000
  //   request :
  // type=hot 类型
  // offset : 数据开始位置
  // limit ：偏移量
  movielistapi:'http://m.maoyan.com/movie/list.json?type=hot&offset=08&limit=100',
  //   查出电影详情(包含评论)
  // http://m.maoyan.com/movie/xxxx.json
  // request:
  // 这里直接在将xxxx换成movieid 例子 246363.json
  movieinfoapi:'http://m.maoyan.com/movie/xxxx.json',
  // 加载更多评论
  // http://m.maoyan.com/comments.json?movieid=246363&limit=5&offset=5
  // request
  // movieid : 电影id 
  // limit ： 同上
  // offset ：同上
  morecommentapi:'http://m.maoyan.com/comments.json',
  //   查出影院
  // http://m.maoyan.com/cinemas.json
  // 猫眼的服务器会根据你的ip段加载出你本地的影院
  cinemaapi:'http://m.maoyan.com/cinemas.json',
  //   查询出影院详情
  // http://m.maoyan.com/showtime/wrap.json?cinemaid=11533&movieid=
  // request
  // cinemaid : 影院id
  // movieid : 电影id
  cinemainfoapi:'http://m.maoyan.com/showtime/wrap.json',
  //   选座
  // http://m.maoyan.com/show/seats?showId=76304&showDate=2015-06-05
  seatsapi:'http://m.maoyan.com/show/seats'
}

