import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component {
  render(){
    const { photo, id, likes, index } = this.props
    return(
      <figure className='grid-feature'>
        
        <Link to={`/view/${photo.id}`}>
          { photo.title }
          <img src={photo.img_src} alt={photo.title} width='50px'/>
        </Link>

          <button onClick={this.props.increment.bind(null, index)}>&hearts;{photo.likes}</button>
      </figure>
    )
  }
}
