import React, { Component } from 'react';
import Lazyload from 'react-lazyload';
import Scroll from '../../../common/scroll/Scroll';
import { getmoviewillshowlist } from '../../../api/apifun';
import { createMovieListByItem } from '../../../model/movie'
import Loading from '../../../common/loading/Loading'

import './willshow.styl'


class WillShow extends Component {
  state = {
    show: true,
    movielist: [],
    refreshScroll: false
  }
  getImage(url){
    console.log(url);
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
      return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
    }
  }
  componentDidMount() {
    getmoviewillshowlist().then(res => {
      let movielist = res.data.subjects
      console.log("movielist", movielist)
      this.setState({
        movielist,
        show: false
      })
    })
  }
  renderMovielist() {
    const { movielist = [] } = this.state;
    return movielist.map(item => {
      const movie = createMovieListByItem(item);
      return (
        <div className="movie-wrapper" key={movie.id}>
          <div className="left">
            <Lazyload>
              <img src={this.getImage(movie.img)} width="64px" height="90px" alt="" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="moviename">
              {movie.name}
            </div>
            <div className="rating">
              <span className="ratingtext">观众评</span>
              <span className="ratingnum">{movie.rating}</span>
            </div>
            <div className="casts">
              主演:{movie.casts}
            </div>
          </div>
          <div className="buy">
            <div className="btn">购票</div>
          </div>
        </div>
      )
    })
  }
  render() {
    const { refreshScroll } = this.state
    return (
      <div className="onshow">
        <Scroll refresh={refreshScroll}>
          <div className="movielist">
            {
              this.renderMovielist()
            }
          </div>
        </Scroll>
        <Loading title="正在加载中..." show={this.state.show} />

      </div>
    );
  }
}

export default WillShow;