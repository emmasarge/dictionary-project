import React from "react";

export default function Phonetics(props) {
  return (
    <div className="container border mt-3">
        <h3>Phonetics</h3>
      {props.phonetic.phonetics.slice(0,2).map(function (phonetic, index) {
        return (
          <div key={index}>
            <p>{phonetic.text}</p>
            <p>{phonetic.audio}</p>
          </div>
        );
      })}
    </div>
  );
}
