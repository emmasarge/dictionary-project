import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="container border mt-3 p-4">
      <h4 className="mb-3">Phonetics</h4>
      {props.phonetic.phonetics.slice(0, 2).map(function (phonetic, index) {
        return (
          <div key={index} className="row phonetic-result">
            <p className="col-sm-2">{phonetic.text}</p>
            {phonetic.text === null || phonetic.audio.length === 0 ? (
              <span className="hidden"></span>
            ) : (
              <span className="col-sm-2"><ReactAudioPlayer src={phonetic.audio} controls /></span>
            )}
          </div>
        );
      })}
    </div>
  );
}
