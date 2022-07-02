import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function SearchBar(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState("");
  let [pictures, setPictures] = useState([]);

  function handleImages(response) {
    setPictures(response.data.photos);
    console.log(response, "response");
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    let pexelKey = "563492ad6f917000010000016d039f0682964f2696c79e434352000f";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${pexelKey}` } })
      .then(handleImages);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apilUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apilUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if(loaded) {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center my-4">
        <h1 className="mt-4">Dictionary</h1>
        <p className="ms-2 mt-3 fst-italic">(noun)</p>
      </div>
      <div className="container w-80">
        <form className="mx-auto text-center d-flex row" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="look up..."
            defaultValue={props.defaultKeyword}
            className="form-control col-sm-2 search-input w-100 col-auto"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="search" className="col-sm-2"/>
        </form>
        <p className="smallText ms-1 fst-italic">for example you can look up 'tree', 'run', 'sunset'..</p>
      </div>
      <Results results={results} photos={pictures} />
    </>
  );} else {
      load();
      return "loading"
  }
}
