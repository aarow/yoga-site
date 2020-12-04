import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const ArticlesPage = (props) => {
  const { config } = props;
  console.log(useRouter());

  return (
    <Layout config={config}>
      <h1>ArticlesPage </h1>
    </Layout>
  );
};

export default ArticlesPage;
