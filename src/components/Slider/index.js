import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide from './components/Slide';
import './slider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2>{this.props.name}</h2>
        <Slider {...settings}>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </Slider>
      </div>
    );
  }
}
