import React from 'react';
import Helmet from 'react-helmet';
// import Gallery from '../components/Gallery';
import Layout from '../components/layout';
// import Contact from '../components/Contact'
// import favicon from '../assets/images/website-icon.png';
// import MyForm from '../components/MyForm';

const fullPortfolio = () => {
  const siteTitle = 'Kelly Gowing - Full-Stack Developer';
  const siteDescription =
    'Web Devlopment portfolio by Kelly Gowing, using Gatsby Starter - Strata';

  return (
    <Layout>
      <Helmet />
    </Layout>
  );
};

export default fullPortfolio;
