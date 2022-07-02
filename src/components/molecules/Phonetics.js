import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="container border mt-3 p-4">
      <h4>Phonetics</h4>
      {props.phonetic.phonetics.slice(0, 2).map(function (phonetic, index) {
        return (
          <div key={index}>
            <p>{phonetic.text}</p>
            {phonetic.text == null || phonetic.audio == false ? (
              <span className="hidden"></span>
            ) : (
              <span><ReactAudioPlayer src={phonetic.audio} controls /></span>
            )}
          </div>
        );
      })}
    </div>
  );
}
