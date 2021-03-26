import React, { Component } from 'react';
import Slider from 'react-slick';
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
          <div>
            <h3 className="slide">1</h3>
          </div>
          <div>
            <h3 className="slide">2</h3>
          </div>
          <div>
            <h3 className="slide">3</h3>
          </div>
          <div>
            <h3 className="slide">4</h3>
          </div>
          <div>
            <h3 className="slide">5</h3>
          </div>
          <div>
            <h3 className="slide">6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
