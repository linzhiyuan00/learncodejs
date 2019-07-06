import React, { Component } from 'react';
class ShowAll extends Component {
  state = {  }
  render() { 
    const { todolist,toggletodo } = this.props;
    console.log(this.props);
      return (  
        <div>
          {
            todolist.map((list,i) =>{
              return(
                <li key={i} onClick={() =>{toggletodo(list.id)}} style={{textDecoration:list.completed ? 'line-through' : ''}}>{list.todo}</li>
              )
            })
          }
        </div>
      );
  }
}

export default ShowAll;