//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
//add comment
export function addComment(postId, author, comment) {
  console.log('dispatch add comment')
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment
export function removeComment(postId, index) {
  console.log('dispatch removing comment')
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
