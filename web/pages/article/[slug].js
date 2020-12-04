import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import client from '../../client';
import SimpleBlockContent from '../../components/SimpleBlockContent';
import imageUrlBuilder from '@sanity/image-url';
import styles from './slug.module.css';
import { format } from 'date-fns';

// import ArticleList from '../components/sections/ArticleList';

const builder = imageUrlBuilder(client);

const Article = (props) => {
  const {
    query: { slug }
  } = useRouter();

  const [article, setArticle] = useState(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState('');
  const [authorAvatarUrl, setAuthorAvatarUrl] = useState('');

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "article" && slug == $slug][0]{
          ...,
          "authorName": author->author_name,
          "authorAvatar": author->avatar,
        }
      `,
        { slug }
      )
      .then((data) => {
        console.log(data);
        setArticle(data);
        setFeaturedImageUrl(builder.image(data.featured_image.image).auto('format').width(912).url());
        setAuthorAvatarUrl(builder.image(data.authorAvatar.image).auto('format').width(256).url());
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {article && (
        <Layout config={article}>
          <div className={styles.root}>
            <h1 className={styles.title}>{article.title}</h1>
            <p className={styles.byLine}>
              <span className={styles.avatar} style={{ backgroundImage: `url(${authorAvatarUrl})` }} />
              <span>{article.authorName}</span>
              <span>{format(new Date(article.publishDate), 'MMMM d, yyyy')}</span>
            </p>
            <img src={featuredImageUrl} alt={article.title} className={styles.featuredImage} />
            {/*<div>{article.content}</div>*/}
            <div className={styles.content}>
              <SimpleBlockContent blocks={article.content} />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

Article.propTypes = {
  config: PropTypes.object
};

export default Article;
