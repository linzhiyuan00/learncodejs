import React, { Component } from 'react';
import Swiper from 'swiper';
import { getCarousel, getNewAlbum } from '../../api/recommand';
import 'swiper/dist/css/swiper.css';
import './recommend.styl';

class Recommand extends Component {
  state = {
    slideList: [],
    albumList: []
  }
  componentDidMount() {
    getCarousel().then(res => {
      this.setState({
        slideList: res.data.slider
      }, () => {
        if (!this.sliderSwiper) {
          this.sliderSwiper = new Swiper('.slider-container', {
            loop: true,
            autoplay: 3000,
            pagination: '.swiper-pagination'
          })
        }
      })
    })
    getNewAlbum().then(res=>{
      console.log(res)
      let albumList = res.albumlib.data.list;
      console.log(albumList)
      this.setState({
        albumList
      })
    })
  }
  renderSwiperItem() {
    const { slideList } = this.state;
    return (
      <>
      { slideList.map((slider) => {
        return (
          <div className="swiper-slide" key={slider.id}>
            <a href={slider.linkUrl} className="slider-nav">
              <img src={slider.picUrl}
              width="100%" height="100%" alt=""/>
            </a>
          </div>
        )
      }) }
      </>
    )
  }
  renderAlbum(){
    const { albumList = [] } = this.state;
    return albumList.map(item =>{
      return (
        <div className="album-warpper" key={item.mId}>
          <div className="left">
            <img src={item.img} alt=""/>
          </div>
          <div className="right">
            <div className="album-name">
              {
                item.name
              }
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    return ( 
      <div className="music-recommend">
        <div>
          <div className="slider-container">
            {/* slider -> swiper */}
            <div className="swiper-wrapper">
              { this.renderSwiperItem() }
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="album-container">
            <h1 className="title">最新专辑</h1>
            <div className="album-list">
              {
                this.renderAlbum()
              }
            </div>
          </div>
        </div>
      </div>
     )
  }
}
 
export default Recommand;