import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const CustomPage = styled.div`

  main {
    padding-top: 16px;
  }
`;

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <CustomPage>
        <main>404</main>
      </CustomPage>
    </>
  );
};

export default NotFoundPage;
