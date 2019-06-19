import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state ={
    commentlists:[]
  }
  handleSubmit= (val) =>{
    console.log('从子组件',val);
    let commentlists = this.state.commentlists.slice(0);
    commentlists.push(val);
    this.setState({
      commentlists
    })
  }
  render() {
    const { commentlists } = this.state;
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit}/>
        <CommentList commentlists={commentlists}/>
      </div>
    )
  }
}

export default App;
