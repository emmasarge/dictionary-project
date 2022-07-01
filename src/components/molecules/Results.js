import React from "react";
import Meaning from './Meaning'

export default function Results(props) {

  if (props.results) {
    return (
      <div className="results">
        <p>{props.results.word}</p>
        <p>{props.results.phonetic}</p>
       <Meaning meaning={props.results}/>
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
