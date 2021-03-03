import React from "react";
import { useParams } from "react-router-dom";

import { service } from "../../Data/serviceData";

function ServicesSingle() {
  let { id } = useParams();

  const filteredData = service.filter((items) => items.id === parseInt(id));
  console.log(filteredData);
  const { title, description, icon } = filteredData[0];

  return (
    <div className="row">
      <div className="col-lg-4">
        {" "}
        <p>single items {id}</p>
        <p>f {title}</p>
        <p>single items {description}</p>
      </div>
      <div className="col-lg-4">
        <img className="img-fluid" src={icon}></img>
      </div>
    </div>
  );
}

export default ServicesSingle;
