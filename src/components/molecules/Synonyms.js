import React, { useState } from "react";

export default function Synonyms(props) {
  let [toggle, setOpenToggle] = useState(false);

  function openToggle() {
    setOpenToggle(true);
  }
  function closeToggle() {
    setOpenToggle(false);
  }


  return (
    <div className="container mx-auto border p-4">
      <h4 className="mb-3">Synonyms</h4>
      {!toggle && (
        <div>
          {props.words.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {meaning.synonyms.slice(0, 1).map(function (synonym, index) {
                  return (
                    <div key={index}>
                      {synonym === null ? (
                        <p className="mb-1">{synonym}</p>
                      ) : (
                        <p className="mb-1">{synonym}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
          {props.words.meanings[0].synonyms.length === 0 ? (
            <p className="smallText fst-italic ms-1 mt-0">No synonyms available</p>
          ) : (
            <p onClick={openToggle} className="mt-2 fw-bold toggleBtn">
              See more
            </p>
          )}
        </div>
      )}

      {toggle && (
        <div className="overflow-scroll w-full">
          {props.words.meanings.map(function (synonyms, index) {
            return (
              <div key={index} className="d-flex col-auto">
                {synonyms.synonyms.map(function (synonym, index) {
                  return (
                    <div key={index} className="col-3">
                      {toggle && <p className="me-3">{synonym}</p>}
                    </div>
                  );
                })}
              </div>
            );
          })}
          {props.words.meanings[0].synonyms.length === 0 ? (
            <p className="hidden"></p>
          ) : (
            <p onClick={closeToggle} className="fw-bold toggleBtn">
              See less
            </p>
          )}
        </div>
      )}
    </div>
  );
}
