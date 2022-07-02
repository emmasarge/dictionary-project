import React from "react";

export default function Pictures(props) {
  if (props.photos != null) {
    return (
      <div className="pictures container border p-4 mx-auto">
        <h4>Pictures</h4>
        <div className="row">
          {props.photos.map(function (image, index) {
            return (
              <div key={index}>
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src.landscape}
                    className="img-fluid rounded"
                    alt={image.photographer}
                    width={300}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
