import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useGlobalContext } from './context'
import { useQuery } from '@tanstack/react-query';
const Gallery = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
     const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`
    const {query} = useGlobalContext();
    const {data,isLoading,isError} = useQuery({
     queryKey:['images',query], // ecery time when query chenges it fetch for caching
     queryFn: async() => await axios.get(`${url}&query=${query}`)
    })

    if (isLoading) {
     return (
       <section className='image-container'>
         <h4>Loading...</h4>
       </section>
     );
   }

   if (isError) {
     return (
       <section className='image-container'>
         <h4>There was an error...</h4>
       </section>
     );
   }
 
   const results = data.data.results;
   if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results found</h4>
      </section>
    );
  }

  return (
     <section className='image-container'>
     {results.map((item) => {
       const url = item?.urls?.regular;
       return (
         <img
           src={url}
           key={item.id}
           alt={item.alt_description}
           className='img'
         ></img>
       );
     })}
   </section>
  )
}

export default Gallery