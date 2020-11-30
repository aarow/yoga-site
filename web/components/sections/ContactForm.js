import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import SimpleBlockContent from '../SimpleBlockContent';

export default function ContactForm(props) {
  const { heading, tagline, backgroundColor } = props;

  return (
    <div className={styles.backgroundColor} style={{ backgroundColor }}>
      <div className={styles.root}>
        <div>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Name <small className={styles.secondaryTextColor}>(required)</small>{' '}
              <input type="text" name="name" className={styles.formInput} />
            </label>
          </p>
          <p>
            <label>
              Email <small className={styles.secondaryTextColor}>(required)</small>{' '}
              <input type="email" name="email" className={styles.formInput} />
            </label>
          </p>
          <p>
            <button type="submit" className={styles.btn}>
              Send
            </button>
          </p>
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  heading: PropTypes.string,
  tagline: PropTypes.array,
  backgroundColor: PropTypes.string,
  classes: PropTypes.string
};
