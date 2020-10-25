import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

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
                  date
                  author
                }
              }
            }
          }    
      }
    `}
      render={data => (
        <div>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <Link to={post.node.frontmatter.path}><h3>{post.node.frontmatter.title}</h3></Link>
          </div>
        ))}
      </div>
      )}
    />
  )
}

export default Gallery
