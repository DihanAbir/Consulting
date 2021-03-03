import React from "react";
import UpperNav from "./UpperNav";

const Navbar = () => {
  return (
    <div className="container ">
      <UpperNav/>
      <div className="row my-4">
        <div className="col-lg-3 border "> demo files </div>
        <div className="col-lg-7 border"> demo files </div>
        <div className="col-lg-2 border"> demo files </div>
      </div>
    </div>
  );
};

export default Navbar;
