import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide from './components/Slide';
import './slider.css';
import { StaticQuery, graphql } from 'gatsby';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    const type = this.props.type;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <StaticQuery
          query={graphql`
            query ProjectQuery {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/main-portfolio/" } }
              ) {
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      title
                      author
                      position
                      featureImage {
                        childImageSharp {
                          fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                      caption
                      description
                      postType
                    }
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Slider {...settings}>
              {data.allMarkdownRemark.edges.map((post) => {
                if (post.node.frontmatter.postType === type) {
                  return (
                    <Slide
                      key={post.node.id}
                      id={post.node.id}
                      source={post.node.frontmatter.path}
                      thumbnail={
                        post.node.frontmatter.featureImage.childImageSharp.fluid
                      }
                      caption={post.node.frontmatter.caption}
                      description={post.node.frontmatter.description}
                      position={post.node.frontmatter.position}
                    />
                  );
                } else {
                  return;
                }
              })}
            </Slider>
          )}
        />
      </div>
    );
  }
}
