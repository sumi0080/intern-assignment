import React from 'react';
import Head from 'next/head';

export default function Home() {
  const API_KEY = 'ee7f05f3fa5945387b2abca8d759fa0c'
  const url = "https://api.themoviedb.org/3/movie/550?api_key=ee7f05f3fa5945387b2abca8d759fa0c"
  
  fetch(url, {
    method:"GET"
  })
  .then(resp => resp.json())
  .then(function(data)
  {
    console.log(data);
  })
  .catch(function(error){
    console.log(error);
  });
  
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
