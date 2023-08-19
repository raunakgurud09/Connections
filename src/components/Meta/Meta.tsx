import { APP_NAME } from '@/constants/index';
import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Meta = ({
  title = "HOME",
  description = "Fullcover a booking site where you can earn rewards",
  image = 'https://www.fullcover.in/favicon.ico',
}: Props) => {
  const siteTitle = `${title} | ${APP_NAME}`;

  return (
    <Head>
      <title>{siteTitle}</title>

      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@fullcover" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Meta;
