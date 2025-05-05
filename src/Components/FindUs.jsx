import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join w-full join-vertical">
        <button className="btn bg-base-100 join-item"><FaFacebook fill="navy"></FaFacebook> Facebook</button>
        <button className="btn bg-base-100 join-item"><FaTwitter fill="skyblue"></FaTwitter> Twiter</button>
        <button className="btn bg-base-100 join-item"><FaInstagram fill="red"></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
