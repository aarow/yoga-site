import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import client from '../../client';
import styles from './PageList.module.css';

const PageList = (props) => {
  const { heading, tagline, headingAlignment } = props;
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "route"] {
          ...
        }
      `
      )
      .then((data) => {
        console.log(data);
        setPageList(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={`${styles.root} `}>
      <section className={styles.article}>
        <h2 className={styles.heading} dangerouslySetInnerHTML={{ __html: heading }} style={{ textAlign: headingAlignment }} />
        {tagline && <p>{tagline}</p>}
        <div className={styles.row}>{/*<Pages />*/}</div>
      </section>
    </div>
  );
};

PageList.propTypes = {
  _id: PropTypes.string,
  heading: PropTypes.string,
  headingAlignment: PropTypes.string,
  tagline: PropTypes.string,
  pages: PropTypes.array
};

export default PageList;
