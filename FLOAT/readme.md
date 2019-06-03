# 圣杯布局优点：
    让最重要的最先显示出来，提升用户体验
#缺点：
    造成父元素坍塌

# 清除浮动的几种方法
1. 在父元素内容底部加上一行代码  <div style="clear:left"></div>  or  <div style="clear:both"></div>
2. 在父容器css中上添加浮动样式  （不推荐使用  不负责 ）
      div.父元素名｛
       float：left
      ｝
3. 使用css中的伪类after，给父元素div添加一个clearFix的class类
   .content::after{
    content: "";
    clear: both;
    display: block;

    /* 如果伪元素content''中有内容  需要添加*/

    /* height: 0;
    visibility: hidden; */

    或者给content添加一个类名 clearFix 中写
    .clearFix::after{
    content: "";
    clear: both;
    display: block;
  }
4. 利用BFC（块级格式化上下文）的效果来弥补父容器的高度塌陷
   div.content{
      overflow: hidden;auto;scroll;
    }
5. 尼古拉斯大师  方法，把父容器的display设置为table，可以创建一个匿名表格单元，直接触发BFC效果  (不推荐使用，会产生很多不好的效果)
   .content{
     display:table;
   }