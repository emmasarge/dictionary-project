import React, { useState } from "react";
import axios from 'axios';



export default function SearchBar() {
  let [keyword, setKeyword] = useState("");
  
  function handleResponse(response){
      let word = response.data[0].word;
      let meaning = response.data[0].meanings[0].definitions[0].definition;
      let phonetic = response.data[0].phonetic;
      let synonym = response.data[0].meanings[0].synonyms;
      console.log(synonym);
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
    </>
  );
}
