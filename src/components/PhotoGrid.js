import React, { Component } from 'react'
import Photo from './Photo'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div>
        <div className='photo-grid'>
            {this.props.PhotoGrid.CSS.map((photo, index) =>
              <Photo {...this.props} key={index} index={index} photo={photo}/>
            )}
        </div>
      </div>
    )
  }
}
