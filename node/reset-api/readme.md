fullstack 全栈
Front Enginner
Backend  /api

restful  api
浏览器与服务器通信方式的一种设计风格

- restful  的世界里， 一切皆资源
- url 来唯一定位资源的识别符
  /posts/:id/comments/
- 加一条comment怎么办？  /comments/2
  {
    id:2,
    body:"好巧，你那边也在下雨",
    postId:1
  }
  /comments  设计好url  POST
- 设计有意义的URL 
   资源  状态改变 
   POST / comments  加一条评论  id:2
   修改一下内容
    PUT/comments/2  body:'最美不过下雨天，一起与你...'
  操作   SQL 方法  HTTP动词
  CREATE  INSERT  POST
  READ    SELECT  GET
  UPDATA   UPDATA  PUT/PATCH {body:'',postId:1}
  PATCH  只要一部分
  DELETE    DELETE

  状态的切换   使用定义的谓语动词