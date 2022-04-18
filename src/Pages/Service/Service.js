import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
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
          <button
            onClick={() => navigateToServiceDetail(id)}
            className="btn btn-primary mx-auto w-50"
            href="#"
          >
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
