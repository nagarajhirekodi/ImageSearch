import React from "react";
import { Link } from "react-router-dom";
import "./View.css";

const ImageView = (props) => {
  const { imageURL, alt } = props.location.state;
  return (
    <div
      className="container"
      style={{ padding: "5rem 10rem", background: "#a5a0a0" }}
    >
      <Link className="imageView__span" to="/">X</Link>
      <div className="imageView__container">
        <img
          src={imageURL}
          alt={alt}
          className="imageView__img img-responsive"
        />
        <div className="imageView__text">
          <button>
            Download
            <a href={imageURL} download />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageView;
