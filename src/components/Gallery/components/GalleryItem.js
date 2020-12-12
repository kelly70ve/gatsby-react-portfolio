import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const GalleryItem = ({id, source, thumbnail, caption, description}) => {

    // const onClick = useCallback((e) => {
    //     e.preventDefault()
    //     toggleLightbox(position)
    // }, [position, toggleLightbox]);

    return (<article key={id} className="6u 12u$(xsmall) work-item">
        <a
        className="image fit thumb"
        href={source}
        >
        <Img fluid={thumbnail} />
        </a>

        <h3>{caption}</h3>
        <p>{description}</p>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.object.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
}

export default GalleryItem