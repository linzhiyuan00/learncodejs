import React, { Component } from 'react';
class Add extends Component {
  state = {  }
  addlist = (todo) =>{
    this.props.addtodolist(todo);
  }
  render() { 
      return (  
        <div className="addinput">
          <form onSubmit={e =>{
            e.preventDefault();
            console.log(this.inputNode.value)
            addlist(this.inputNode.value)
          }}>
            <input type="text" ref={node =>this.inputNode = node} />
            <button type="submit">添加事务</button>
          </form>
        </div>
      );
  }
}

export default Add;