import React from 'react';
import PropTypes from 'prop-types';
import SimpleBlockContent from '../SimpleBlockContent';
import styles from './TextSection.module.css';

function TextSection(props) {
  const { heading, label, text, classes, headingAlignment } = props;

  return (
    <div className={`${styles.root} ${classes}`}>
      <section className={styles.article}>
        <div className={styles.label}>{label}</div>
        <h2 className={styles.heading} style={{ textAlign: headingAlignment }}>
          {heading}
        </h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  );
}

TextSection.propTypes = {
  heading: PropTypes.string,
  headingAlignment: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.string
};

export default TextSection;
