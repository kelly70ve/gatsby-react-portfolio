import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from './photos';

/* popout the browser and maximize to see more columns! -> */
export default class Masonry extends Component {
  render() {
    return <Gallery photos={this.props.photos} direction={'column'} />;
  }
}
