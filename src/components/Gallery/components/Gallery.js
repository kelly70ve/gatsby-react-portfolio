import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Gallery = () => {

  return (

    <StaticQuery 
      query={graphql `
      query ProjectIndexQuery {
          allMarkdownRemark {
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
                }
              }
            }
          }    
      }
    `}
    render={data => (
      <div>
        <div class="row">
          {data.allMarkdownRemark.edges
          .sort((a, b) => {
            return a.node.frontmatter.position - b.node.frontmatter.position
          })
          .map((post) => {
            return(
              <GalleryItem
                id={post.node.id}
                source={post.node.frontmatter.path}
                thumbnail={post.node.frontmatter.featureImage.childImageSharp.fluid}
                caption={post.node.frontmatter.caption}
                description={post.node.frontmatter.description}
                position={post.node.frontmatter.position}
              />
            );
            })}
        </div>

      </div>
    )}
    />
  )
}

// const Gallery = ({ images = DEFAULT_IMAGES }) => {
//   const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
//   const [selectedIndex, setSelectedIndex] = useState(0)

//   const toggleLightbox = useCallback(selectedIndex => {
//     setLightboxIsOpen(!lightboxIsOpen)
//     setSelectedIndex(selectedIndex)
//   }, [lightboxIsOpen])

//   return (
//     <div>
//       {images && (<div className="row">
//         {images.map((obj, i) => {
//         return (<GalleryItem
//           id={obj.id}
//           source={obj.source}
//           thumbnail={obj.thumbnail}
//           caption={obj.caption}
//           description={obj.description}
//           position={obj.position}
//           toggleLightbox={obj.toggleLightbox}
//           position={i}
//           toggleLightbox={toggleLightbox}
//         />); 
//         })}
//         </div>
//       )}
//       <ModalGateway>
//         {lightboxIsOpen && (
//           <Modal onClose={toggleLightbox}>
//             <Carousel currentIndex={selectedIndex} views={images} />
//           </Modal>
//         )}
//       </ModalGateway>
//     </div>
//   )
// }

// Gallery.displayName = 'Gallery'
// Gallery.propTypes = {
//   images: PropTypes.array,
// }

export default Gallery
