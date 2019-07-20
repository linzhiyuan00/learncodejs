import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from '../../../common/header/Header';
import Scroll from '../../../common/scroll/Scroll';
import { getmovieinfo } from '../../../api/apifun';
import { createMovieDetail } from '../../../model/movieinfo';

import './movieinfo.styl'



class MovieInfo extends Component {
  state = {
    isShow: false,
    movieinfo: {}
  }
  getImage(url) {
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if (url !== undefined) {
      return url.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=');
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("movieid", id)
    getmovieinfo(id).then((res) => {
      console.log("movieinfo", res.data)
      let movieinfo = createMovieDetail(res.data)
      this.setState({
        movieinfo
      })
    })
    this.setState({
      isShow: true
    })

  }
  render() {
    const { movieinfo } = this.state;
    const movieimage = this.getImage(movieinfo.images)
    console.log(movieinfo)
    return (
      <CSSTransition in={this.state.isShow} timeout={2000} classNames="translate">
        <Scroll refresh>
          <div className="movie-detail">
            <Header title={movieinfo.title} ref="header"></Header>
            <div className="movieinfo-bg" style={{ position: "absolute" }}>
              <div className="bgimg">
                <img src={this.getImage(movieinfo.images)} alt="" />
              </div>
            </div>
            <div className="movie-body">
              <div className="movie-top">
                <div className="left">
                  <img src={this.getImage(movieinfo.images)} alt="" />
                </div>
                <div className="right">
                  <div className="title">{movieinfo.title}</div>
                  <div className="titleaka">{movieinfo.aka}</div>
                  <div className="rating">{movieinfo.rating}</div>
                  <div className="genres">{movieinfo.genres}</div>
                  <div className="dur-place">
                    <span>{movieinfo.countries}/</span>
                    <span>{movieinfo.durations}</span>
                  </div>
                  <div className="pubdate">{movieinfo.pubdate} 上映</div>
                </div>
              </div>
              <div className="movie-container">
                
              </div>
            </div>
          </div>
        </Scroll>
      </CSSTransition>
    );
  }
}

export default MovieInfo;