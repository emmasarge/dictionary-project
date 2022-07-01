import React from "react";

export default function Meaning(props){
    return(
        <div>
             {props.meaning.meanings.map(function (meaning, index) {
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
        </div>
    )
}