import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import Main from './Main'

function mapStateToProps(state) {
  return {
    PhotoGrid: state.PhotoGrid,
    Comments: state.Comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
