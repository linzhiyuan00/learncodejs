import React, { Component } from 'react';
import Header from '../../../common/header/Header';
import { getmovieinfo } from '../../../api/apifun';



class MovieInfo  extends Component {
  state = { 
    movie:{}
   }
  componentWillMount(){
    const id = this.props.match.params.id;
    console.log(id)
    getmovieinfo(id).then((res) =>{
      console.log(res)
    })
  }
  componentDidMount(){
    
    
  }
  render() { 
    const { movie } = this.state;
      return (  
        <div className="movie-detail">
          <Header title={movie.name}></Header>
          <div className="bg"></div>
        </div>
      );
  }
}

export default MovieInfo;