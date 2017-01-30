function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        user: action.author,
        text: action.comment
      }]
      case 'REMOVE_COMMENT':
      //we need to return the new state without the deleted comment
        return [ //from the beginning of the array to the comment we want to delete
          ...state.slice(0, action.index),
          //after the deleted one, to the end
          ...state.slice(action.index + 1)
        ]
        default:
        return state
  }
  return state
}

function comments(state = [], action) {
  return {
    //take the current state
      ...state,
    //overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
  }
}

export default comments
