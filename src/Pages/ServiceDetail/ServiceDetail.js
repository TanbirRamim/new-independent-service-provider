import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { servicesId } = useParams();
  return (
    <div>
      <h2 className="container text-center">Welcome to detail: {servicesId}</h2>

      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
