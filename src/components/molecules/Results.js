import React from "react";
import Meaning from './Meaning'
import Phonetics from './Phonetics'
import Pictures from "./Pictures";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h1 className="text-center my-3 text-capitalize">{props.results.word}</h1>
       <Meaning meaning={props.results}/>
       <Phonetics phonetic={props.results}/>
       <Pictures photos={props.photos}/>
      </div>
    );
  } else {
    return null;
  }
}
