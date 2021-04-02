import React from 'react';
import Img from 'gatsby-image';

const Slide = ({ id, source, thumbnail, caption, description }) => {
  return (
    <a key={id} className="image fit thumb" href={source}>
      <Img fluid={thumbnail} />
    </a>
  );
};

export default Slide;
