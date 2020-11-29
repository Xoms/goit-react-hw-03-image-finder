import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.styles.scss';

const ImageGallery = ({images, onImageClick}) => (
  <ul className="ImageGallery">
    {
      images.map( ({id, ...rest}, idx) => 
        <ImageGalleryItem key={id + idx} {...rest} onImageClick={onImageClick}/>)
    }
  </ul>
);

ImageGallery.propTypes = {
   images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string, 
    tags: PropTypes.string, 
    largeImageURL: PropTypes.string, 
    webformatURL: PropTypes.string
   })).isRequired,
   onImageClick: PropTypes.func.isRequired
};

export default ImageGallery;
