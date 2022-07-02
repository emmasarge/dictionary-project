import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      <div className="container border mb-3 p-4">
        <h4 className="mb-3">Definitions</h4>
        {props.meaning.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p>
                <span className="fw-bold">Definition type:</span>
                <span className="fst-italic"> {meaning.partOfSpeech}</span>
              </p>
              <p>{meaning.definitions[0].definition}</p>
              {meaning.definitions[0].example == null ? (
                <span className="hidden"></span>
              ) : (
                <p>
                  <span className="fw-bold">Example: </span>
                  {meaning.definitions[0].example}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <Synonyms words={props.meaning} />
    </div>
  );
}
