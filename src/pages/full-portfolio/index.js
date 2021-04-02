import React from 'react';
import Layout from '../../components/layout';
import SimpleSlider from '../../components/Slider';

const fullPortfolio = () => {
  return (
    <Layout>
      <div id="main">
        <h1>Full Portfolio</h1>
        <SimpleSlider name="Web Development" type="web-development" />
        <SimpleSlider name="Design" type="design" />
        <SimpleSlider name="Photography" type="photography" />
        <SimpleSlider name="Marketing" type="marketing" />
        <SimpleSlider name="Hackathons" type="hackathons" />
      </div>
    </Layout>
  );
};

export default fullPortfolio;
