import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "../../Constant/icons";

const UpperNav = () => {
  return (
    <div className="container p-2" style={{ borderBottom: "1px solid grey" }}>
      <div className="row text-white">
        <div className="col-lg-5 justify-content-between  d-flex ">
          <p> {Phone} (+088)-1620665499</p>
          <p> {Mail} nahid.muradabir@gmail.com</p>
        </div>
        <div className="d-flex jus justify-content-between offset-lg-5 col-lg-2  text-center">
          <Link className="Link">{Facebook}</Link>
          <Link className="Link">{Instagram}</Link>
          <Link className="Link">{Twitter}</Link>
          <Link className="Link">{Instagram}</Link>
        </div>
      </div>
    </div>
  );
};

export default UpperNav;
