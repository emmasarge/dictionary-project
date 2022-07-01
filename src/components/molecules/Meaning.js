import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
    <div className="container border mb-3">
      {props.meaning.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <p className="fw-bold">Definition:</p>
            <p className="fst-italic">{meaning.partOfSpeech}</p>
            <p>{meaning.definitions[0].definition}</p>
            <p>{meaning.definitions[0].example}</p>
          </div>
        );
      })}</div>
      <Synonyms words={props.meaning} />
    </div>
  );
}
