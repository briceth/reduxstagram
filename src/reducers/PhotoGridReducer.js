//a reducer takes two things
// 1. the action (info about what happened)
// 2.copy of the current state

export default function PhotoGrid(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
    //return the updated state
    const index = action.index
    //console.log(index)
    const likes = state[index]
    //console.log(likes)
  return [
    ...state.slice(0, index),
    {...state[index], likes: state[index].likes + 1 },
    ...state.slice(index + 1)
  ]
    // if we dont use this case we want to return the current state
    default:
      return state
  }
}
