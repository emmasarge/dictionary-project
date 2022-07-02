import React from "react";

export default function Pictures(props) {
  if (props.photos != null) {
    return (
      <div className="pictures container border p-4 mx-auto mt-3">
        <h4>Pictures</h4>
        <div className="row overflow-scroll">
          {props.photos.map(function (image, index) {
            return (
              <div key={index} className="col-auto m-2 mx-auto ">
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src.landscape}
                    className="img-fluid rounded"
                    alt={image.photographer}
                    width={250}
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
