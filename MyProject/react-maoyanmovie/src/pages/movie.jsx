import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state ={
        tabbarstate:0
    }
  }
  render() { 
      return (  
        <div className="movie">
          <div>电影滴滴滴</div>
        </div>
      );
  }
}

export default Movie;