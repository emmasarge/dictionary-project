import React from "react";
import Meaning from './Meaning'
import Phonetics from './Phonetics'

export default function Results(props) {

  if (props.results) {
    return (
      <div className="results">
        <h2 className="text-center my-3">{props.results.word}</h2>
       <Meaning meaning={props.results}/>
       <Phonetics phonetic={props.results}/>
      </div>
    );
  } else {
    return null;
  }
}
