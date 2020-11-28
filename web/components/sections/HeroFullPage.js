import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';
import styles from './HeroFullPage.module.css';
// import sharedStyles from '../../styles/shared.module.css';

import client from '../../client';
import SimpleBlockContent from '../SimpleBlockContent';
// import Cta from '../Cta';
import Calendly from './Calendly';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function HeroFullPage(props) {
  const {
    heading,
    backgroundImage,
    tagline,
    calendlyItem: { url: calendlyUrl, calendlyPresentation, popupText: calendlyPopupText }
  } = props;

  const backgroundImageStyle = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`
      }
    : {};

  return (
    <div style={backgroundImageStyle} className={[styles.root, styles.centerHorizontal, styles.centerVertical].join(' ')}>
      <div className={styles.content}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: heading }} />
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <div>
          <Calendly
            className={[styles.centerHorizontal, styles.centerVertical, styles.flexColumn].join(' ')}
            url={calendlyUrl}
            calendlyPresentation={calendlyPresentation}
            popupText={calendlyPopupText}
          />
        </div>
      </div>
    </div>
  );
}

HeroFullPage.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  calendlyItem: PropTypes.object
  // ctas: PropTypes.arrayOf(PropTypes.object)
};

export default HeroFullPage;
