import React, { Component } from 'react';
import './button.css';
class Button extends Component {
  state = {  }
  render() { 
    const {clickstart,clickafter,touch} = this.props;
    console.log(touch)
      return ( 
        <div className="main">
          <button className="button" 
          type="button"
          onTouchStart={() =>{
            console.log("按下手指")
            clickstart(true)
          }}
          onTouchMove={() =>{
            console.log('移动手指')
          }}
          onTouchEnd={() =>{
            console.log('松开手指')
            clickafter(false)
          }}
          style={{opacity:touch ? '0.5' :'1'}}
          >点击</button>
        </div>
       );
  }
}

export default Button;