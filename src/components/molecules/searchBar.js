import React, { useState } from "react";
import axios from 'axios';
import Results from './Results';


export default function SearchBar() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState("");
  
  function handleResponse(response){ 
      setResults(response.data[0]);
}

  function search(event) {
    event.preventDefault();
    alert(`looking for definition of ${keyword}...`)
    let apilUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apilUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
   setKeyword(event.target.value);
  }
  return (
    <>
      <div className="text-center mt-3">
        <h1>Dictionary</h1>
        <p>noun</p>
      </div>
      <div>
        <form className="mx-auto text-center" onSubmit={search}>
          <input
            type="search"
            placeholder="look up..."
            onChange={handleKeywordChange}
          />
          <input type="submit" value="search" />
        </form>
      </div>
      <Results results={results} />
    </>
  );
}
