import React from "react";
import { Link } from "react-router-dom";

import "./ImageList.css";

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div className="container">
      <div className="row" style={{ display: "flex" }}>
        {images.map((image) => {
          return (
            <div key={image.id} style={{ marginBottom: "2rem", width: "33%" }}>
              <div className="imageList__container">
                <Link
                  to={{
                    pathname: `/image/${image.links.html}`,
                    state: {
                      imageURL: image.links.html,
                      alt: image.alt_description,
                    },
                  }}
                >
                  <img
                    className="imageList__image"
                    src={image.links.html}
                    alt={image.alt_description}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageList;
