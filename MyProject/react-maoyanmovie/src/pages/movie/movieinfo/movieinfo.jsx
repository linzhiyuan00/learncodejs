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
            <div className="movieinfo-top" style={{ position: "absolute" }}>
              <div className="bgimg" style={{ backgroundImage: `url${movieimage}` }}>
                <div className="filter"></div>
              </div>
            </div>
            <div className="movie-summary">
              {movieinfo.summary}1
                </div>
            <div className="movie-summary">
              {movieinfo.summary}2
                </div>
            <div className="movie-summary">
              {movieinfo.summary}3
                </div>
            <div className="movie-summary">
              {movieinfo.summary}4
                </div>
            <div className="movie-summary">
              {movieinfo.summary}5
                </div>
            <div className="movie-summary">
              {movieinfo.summary}6
                </div>
            <div className="movie-summary">
              {movieinfo.summary}7
                </div>
            <div className="movie-summary">
              {movieinfo.summary}8
                </div>
            <div className="movie-summary">
              {movieinfo.summary}9
                </div>
            <div className="movie-summary">
              {movieinfo.summary}10
                </div>
            <div className="movie-summary">
              {movieinfo.summary}11
                </div>
            <div className="movie-summary">
              {movieinfo.summary}12
                </div>
          </div>
        </Scroll>
      </CSSTransition>
    );
  }
}

export default MovieInfo;