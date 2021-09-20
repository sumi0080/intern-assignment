import React from 'react';
import Head from 'next/head';

export default function Home() {
  const API_KEY = 'paste your movie apikey here so we can easily test your solution with our own apikey'
  
  return (
    <div>
      <Head>
        <title>Student assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl font-medium text-gray-800 mx-10 my-10">Movielist</p>
    </div>
  );
}
