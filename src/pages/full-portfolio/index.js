import React from 'react';
import Layout from '../../components/layout';
import SimpleSlider from '../../components/Slider';

const fullPortfolio = () => {
  return (
    <Layout>
      <div id="main">
        <h1>Full Portfolio</h1>
        <SimpleSlider name="Web Development" />
        <SimpleSlider name="Design" />
        <SimpleSlider name="Photography" />
        <SimpleSlider name="Marketing" />
        <SimpleSlider name="Hackathons" />
      </div>
    </Layout>
  );
};

export default fullPortfolio;
