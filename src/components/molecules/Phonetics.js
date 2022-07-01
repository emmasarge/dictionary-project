import React from "react";

export default function Phonetics(props) {
  return (
    <div>
      {props.phonetic.phonetics.map(function (phonetic, index) {
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
