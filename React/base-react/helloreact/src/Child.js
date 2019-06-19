import React,{ Component } from 'react';
class Child extends Component {
  state={}
  handleAnotherFun = () =>{
    console.log('handleAnotherFun');
  }
  handleClick = (e) =>{
    console.log(this);
    this.handleAnotherFun();
    console.log(e.target.innerHTML);
  }
  handleChange = (e) =>{
    // console.log(e.target.value);
    this.setState({
      inputVal:e.target.value
    })
  }
  render() {
    return (
      //普通函数加.bind（）  this才有效 this.handleClick.bind()
      <div onClick={this.handleClick}>   
        {this.props.msg}
        <input type="text" placeholder="请输入内容" value={this.state.inputVal}
        onChange={this.handleChange}
        ></input>
      </div>
    )
  }
}



export default Child;