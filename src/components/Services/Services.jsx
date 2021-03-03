import React, { useState } from "react";
import { Link } from "react-router-dom";
import { service } from "../../Data/serviceData";
import SectionHeader from "../../utils/SectionHeader";
import "./css.css";
import ServiceItem from "./ServiceItem";

const Services = () => {
const [limit, setLimit ] = useState(6);

  const title = { backgroundColor: "orange", color: "white" };
  const topic = { backgroundColor: "salmon", color: "white" };

  const handleLimit = () => {
    setLimit(limit+5)
  }


  return (
    <div className="container">
      <SectionHeader
        styleTitle={title}
        styleTopic={topic}
        topic="Expert consulting"
        title="service demo"
      />

      <div className="row">
        {service.slice(0,limit).map((serviceItem) => <ServiceItem serviceItem= {serviceItem} />  )}
      </div>
      {
        limit > service.length  ? "": <div className=" text-center">
        <Link to='/services'><button onClick={handleLimit} className='btn btn-light my-5'>More services</button></Link>
         
       </div>
      }
     
    </div>
  );
};

export default Services;
