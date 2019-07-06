import React, { Component } from 'react';
class Add extends Component {
  state = {  }
  render() { 
    const { addtodo }  = this.props;
    console.log(this.props)
      return (  
        <div className="addinput">
          <form onSubmit={e =>{
            e.preventDefault();
            console.log(this.inputNode.value)
            if(this.inputNode.value.trim()){
              addtodo(this.inputNode.value)
            }
            
          }}>
            <input type="text" ref={node =>this.inputNode = node} />
            <button type="submit">添加事务</button>
          </form>
        </div>
      );
  }
}

export default Add;