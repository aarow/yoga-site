import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './Figure.module.css';
import client from '../../client';

const builder = imageUrlBuilder(client);

function Figure(props) {
  const { caption, alt, image } = props;

  return (
    <div className={styles.root}>
      <figure className={styles.figure}>
        <img src={builder.image(image).auto('format').width(2000).url()} className={styles.image} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </div>
  );
}

Figure.propTypes = {
  caption: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  })
};

export default Figure;
