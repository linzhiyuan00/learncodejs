import React, { Component } from 'react';
import './miniplayer.styl';
class  Miniplayer extends Component {
  state = {  }
  handleShow = () =>{
    if(true || this.props.song.url){
      this.props.showMiniPlayer();
    }
  }
  render() {
    const { showStatus }  = this.props; 
    let playerStyle = {};
    if(showStatus) playerStyle = {display: 'none'}
      return ( 
        <div className="mini-player" style={playerStyle} 
        onClick={this.handleShow}
        >
          miniplayer
        </div>
       );
  }
}

export default Miniplayer;