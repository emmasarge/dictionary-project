import React from "react";

export default function Results(props) {

  if (props.results) {
    return (
      <div className="results">
        <p>{props.results.word}</p>
        <p>{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p>{meaning.definitions[0].definition}</p>
              <p>{meaning.partOfSpeech}</p>
              {meaning.synonyms.map(function (synonym, index) {
                return <div key={index}><p>{synonym}</p></div>;
              })}
            </div>
          );
        })}
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <p>{phonetic.text}</p>
              <p>{phonetic.audio}</p>{" "}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
