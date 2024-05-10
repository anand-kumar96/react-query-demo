import React from 'react'
import { useGlobalContext } from './context';

const SearchForm = () => {
     const{setQuery} = useGlobalContext();
     const handleSubmit = (e) =>{
          e.preventDefault();
          // console.log(e.target.elements) // give list of elements
          const searchValue = e.target.elements.search.value; // search is name so we get value
          if(!searchValue) return;
          setQuery(searchValue);
     }
  return (
    <section>
     <h1 className="title">unsplash images</h1>
     <form className="search-form" onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="form-input search-input" 
          name='search'
          placeholder='cat'
          />
          <button 
          type='submit'
          className="btn">
          search
          </button>
     </form>
    </section>
  )
}

export default SearchForm