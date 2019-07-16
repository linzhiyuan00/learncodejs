// class Album {
//   constructor(id, mId, name, 
//     img, singer, publicTime) {
//       this.id = id;
//       this.mId = mId;
//       this.name = name;
//       this.img = img;
//       this.singer = singer;
//       this.publicTime = publicTime;
//   }
// }

class Movie{
  constructor(id,name,img,rating,casts,durations,year,count,genres){
      this.id = id;
      this.name = name;
      this.img = img;
      this.rating = rating;
      this.casts = casts;
      this.durations = durations;
      this.year = year;
      this.count = count;
      this.genres = genres;
  }
}
// export function createAlbumByItem(item) {
//   // album_id: 7089819
// // album_mid: "002gD15j363IEc"
// // album_name: "祝你生日快乐"
// // public_time: "2019-07-02"
// // singers: Array(1)
// // 0:
// // singer_id: 159
// // singer_mid: "0022VU5J1D8BRP"
// // singer_name: "胡彦斌"
// // week: 26
// // year: 2019
//   return new Album(
//     item.album_id,
//     item.album_mid,
//     item.album_name,
//     `http://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album_mid}.jpg?max_age=2592000`,
//     item.singers.map(sing => sing.singer_name).join('/'),
//     item.public_time
//   )
// }

export function createMovieListByItem(item) {
//   0:
// alt: "https://movie.douban.com/subject/30282387/"
// casts: (3) [{…}, {…}, {…}]
// collect_count: 12576
// directors: (2) [{…}, {…}]
// durations: ["147分钟"]
// genres: ["剧情"]
// has_video: false
// id: "30282387"
// images: {small: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", large: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", medium: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg"}
// mainland_pubdate: "2019-07-18"
// original_title: "银河补习班"
// pubdates: (2) ["2019-07-13(大规模点映)", "2019-07-18(中国大陆)"]
// rating: {max: 10, average: 6.5, details: {…}, stars: "35", min: 0}
// subtype: "movie"
// title: "银河补习班"
// year: "2019"
  return new Movie(
    item.id,
    item.title,
    item.images.small,
    item.rating.average,
    item.casts.map(cast =>cast.name).join("/"),
    item.durations,
    item.year,
    item.collect_count,
    item.genres.map(genres =>genres).join(' ')
  )
}