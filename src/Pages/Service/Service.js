import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card ">
        <img src={img} className="card-img-top img-setup" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            {description.length < 30
              ? description
              : description.slice(0, 80) + "..."}
          </p>
          <h4>price: {price}</h4>
          <button className="btn btn-primary mx-auto w-50" href="#">
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
