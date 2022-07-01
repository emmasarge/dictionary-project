import React, { useState } from "react";

export default function SearchBar() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`looking for definition of ${keyword}...`)
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
