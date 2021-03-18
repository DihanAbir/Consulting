import React from "react";
import Menu from "../../utils/Menu";
import UpperNav from "./UpperNav";

const Navbar = () => {
  return (
    <div className="container ">
      <UpperNav />
      <div className="row my-4">
        <div className="col-lg-3  ">
          <span
            className="primary-c"
            style={{ fontSize: "35px", fontWeight: "bolder" }}
          >
            M
          </span>
          <b className="text-white">uradConsulting</b>
        </div>
        <div className="col-lg-7 ">
          <Menu />
        </div>
        <div className="col-lg-2">
          <button className="primary-btn">Get Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
