import React from 'react';

class CommentList extends React.Component {
  render() {
    const { commentlists } = this.props;
    return (
      <ul>
        {
          commentlists.map(({userName, comment}, i) => (
            <li key={i}>
              用户名：{ userName } 
              评论：{ comment }
            </li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList;
