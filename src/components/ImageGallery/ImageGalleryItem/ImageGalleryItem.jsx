import React from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.styles.scss';

const ImageGalleryItem = ({tags, largeImageURL, webformatURL, onImageClick}) => {

  const currentImg = {
    alt: tags,
    imgSrc: largeImageURL
  }

  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" onClick={()=> onImageClick(currentImg)}/>
    </li>
  )
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};

ImageGalleryItem.defaultProps = {
  webformatURL: process.env.PUBLIC_URL+'/img/notFound.png',
  largeImageURL: process.env.PUBLIC_URL+'/img/notFound.png',
  tags: "Sorry, Image not found"
};

export default ImageGalleryItem;
