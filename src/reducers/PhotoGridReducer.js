//a reducer takes two things
// 1. the action (info about what happened)
// 2.copy of the current state

export default function PhotoGrid(state = [], action) {
  console.log(state, action)
  return state
}
