import React, { Component } from 'react'
import Photo from './Photo'

export default class PhotoGrid extends Component {
  render() {
    //const machin = this.props
    //console.log(machin)
    return (
      <div>
        <div className='photo-grid'>
            {this.props.PhotoGrid.map((photo, index) =>
              <div className='col-xs-12 col-sm-4'>
                <Photo {...this.props} key={index} index={index} photo={photo}/>
              </div>
            )}
        </div>
      </div>
    )
  }
}
