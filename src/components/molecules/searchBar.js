import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="text-center mt-3">
        <h1 >Dictionary</h1>
        <p>noun</p>
      </div>
      <div>
          <form className="mx-auto text-center">
              <input type="text" value="look up..."/>
              <input type="submit" value="search"/>
          </form>
      </div>
    </>
  );
}
