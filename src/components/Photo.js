import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component {
  render(){
    const { photo, id, likes, index } = this.props

    return(
      <div>
        <Link to={`/view/${photo.id}`} className='link-card'>
        <div className='card grid-feature'>
          <img src={photo.img_src} alt={photo.title} width='50px' className='background-img'/>
          <p>{ photo.title }</p>

        </div>
      </Link>  
      <button onClick={this.props.increment.bind(null, index)}>&hearts;{photo.likes}</button>
      </div>
    )
  }
}
