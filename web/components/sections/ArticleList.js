import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import client from '../../client';
import styles from './ArticleList.module.css';
import imageUrlBuilder from '@sanity/image-url';
import { format } from 'date-fns';

const builder = imageUrlBuilder(client);

const ArticleList = (props) => {
  const { heading, headingAlignment, count } = props;
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "article"] {
          ...,
          "authorName": author->author_name,
          "authorAvatar": author->avatar,
        }
      `
      )
      .then((data) => {
        setArticleList(data);
      })
      .catch(console.error);
  }, []);

  function Articles() {
    let arr = [];
    articleList.filter((article, index) => {
      if (index === count) return false;
      const featuredImageUrl = builder.image(article.featured_image.image).auto('format').width(912).url();
      console.log(featuredImageUrl);
      const avatarUrl = builder.image(article.authorAvatar.image).auto('format').width(256).url();
      arr.push(
        <li key={article._id}>
          <div className={styles.article}>
            <Link href={`/article/${article.slug}`}>
              <a>
                <div className={styles.featuredImage} style={{ backgroundImage: `url(${featuredImageUrl})` }} />
              </a>
            </Link>

            <div>
              <p className={styles.byline}>
                <span className={styles.avatar} style={{ backgroundImage: `url(${avatarUrl})` }} />
                <span>{article.authorName}</span>
              </p>
              <h4 className={styles.title}>
                <Link href={`/article/${article.slug}`}>
                  <a>{article.title}</a>
                </Link>
              </h4>
              <p className={styles.date}>{format(new Date(article.publishDate), 'MMMM d, yyyy')}</p>
            </div>
          </div>
        </li>
      );
      return true;
    });

    return <ul className={styles.articleList}>{arr}</ul>;
  }

  return (
    <section className={styles.root}>
      <h2 className={styles.heading} style={{ textAlign: headingAlignment }}>
        {heading}
      </h2>
      <Articles />
    </section>
  );
};

ArticleList.propTypes = {
  _id: PropTypes.string,
  heading: PropTypes.string,
  headingAlignment: PropTypes.string,
  count: PropTypes.number
};

export default ArticleList;
