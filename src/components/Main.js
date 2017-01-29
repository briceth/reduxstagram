import React, { Component } from 'react'
import PhotoGrid from './PhotoGrid'
import Single from './Single'
import { Link } from 'react-router'


export default class App extends Component {
  render() {
    return (
      <div>
        <div className='col-xs-12 col-sm-6 col-sm-offset-4'>
          <Link to='/'>REDUXSTAGRAM</Link>


          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}
