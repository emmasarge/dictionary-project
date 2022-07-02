import React, { useState } from "react";

export default function Synonyms(props) {
  let [toggle, setOpenToggle] = useState(false);

  function openToggle() {
    setOpenToggle(true);
  }
  function closeToggle() {
    setOpenToggle(false);
  }

  console.log(props.words, "hello");
  return (
    <div className="container mx-auto border p-4">
      <h4>Synonyms</h4>
      {!toggle && (
        <div>
          {props.words.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {meaning.synonyms.slice(0,1).map(function (synonym, index) {
                  return (
                    <div key={index}>
                      <p>{synonym}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}<p onClick={openToggle} className="fw-bold">See more</p>
        </div> 
      )}
     
      {toggle && (
        <div>
          {props.words.meanings.map(function (synonyms, index) {
            return (
              <div key={index}>
                {synonyms.synonyms.map(function (synonym, index) {
                  return <div key={index}>{toggle && <p>{synonym}</p>}</div>;
                })}
              </div>
            );
          })}

          <p onClick={closeToggle} className="fw-bold">See less</p>
        </div>
      )}
    </div>
  );
}
