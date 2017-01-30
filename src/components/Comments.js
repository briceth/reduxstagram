import React, { Component } from 'react'


export default class Comments extends Component {
  renderComments(comment, index) {
    return (
      <div key={index}>
      <strong>{comment.user}</strong>
      <p>{comment.text}</p>
      <button>&times;</button>
      </div>
    )
  }
  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComments)}
        <form ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}
