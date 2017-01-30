import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
  render() {
    //index of the photo
    const index = this.props.PhotoGrid.findIndex((photo) => photo.id ===
    this.props.params.postId ) //get us the photo
    //console.log(index)

    const photo = this.props.PhotoGrid[index] //get us the photo props of the index
    //console.log(photo)
    const { postId } = this.props.params
    console.log(postId)
    const postComments = this.props.Comments[postId] || []
    console.log(postComments)
    return (
      <div>
        <div className='single-photo'>
          <Photo index={index} photo={photo} {...this.props} />
          <Comments postComments={postComments}/>
        </div>
      </div>
    )
  }
}
