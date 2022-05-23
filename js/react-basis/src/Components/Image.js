import React, { Component } from 'react'
import image from '../images/saitama.png';

export default class Image extends Component {
  render() {
    return (
        <section class="image">
            <div class="image-container">
                <img src={image} alt="" height="196px" width="172px"></img>
            </div>
        </section>
    )
  }
}
