import React, { Component } from 'react'
import PhotoGrid from './PhotoGrid'
import Single from './Single'
import { Link } from 'react-router'


export default class Main extends Component {
  render() {
    return (
      <div>
          <Link to='/'>REDUXSTAGRAM</Link>


          {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
