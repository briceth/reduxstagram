import React, { Component } from 'react'


export default class Comments extends Component {
  renderComments(comment, index) {
    const { postId } = this.props.params
    return (
      <div key={index}>
      <strong>{comment.user}</strong>
      <p>{comment.text}</p>
      <button onClick={this.props.removeComment.bind(null, postId, index)}>&times;</button>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }
  render() {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComments.bind(this))}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='author' placeholder='author'/>
          <input type='text' ref='comment' placeholder='comment'/>
          <input type='submit' hidden/>
        </form>
      </div>
    )
  }
}
