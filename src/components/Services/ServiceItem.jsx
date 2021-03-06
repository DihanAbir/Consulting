import React from "react";
import { Link } from "react-router-dom";
import ServicesSingle from "./ServicesSingle";

const ServiceItem = ({ serviceItem }) => {
  const readMoreHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="serviceItem col-lg-4 p-3">
      <div className="p-3 border serviceRow">
        <div className="row">
          <div className="col-lg-5">
            <img className=" img img-fluid" src={serviceItem.icon} alt="" />
          </div>
          <div className="col-lg-7">
            <h5> {serviceItem.title}</h5>
          </div>
        </div>
        <p> {serviceItem.description}</p>
        <br />
        <div className="text-center">
          <Link className="Link" to={"/singleServices/" + serviceItem.id}>
            <button
              className="my-1 btn btn-light"
              // onClick={}
            >
              Read More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
