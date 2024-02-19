import React from "react";
import { bankImages } from "../constants/images.js";

const PartnerSection = () => {
  return (
    <div className=" grid-col-2 grid items-center  gap-6 px-5 py-8 md:grid-cols-3 lg:grid-cols-5">
      {bankImages.map((image) => (
        <img src={image} alt="partnerLogo"></img>
      ))}
    </div>
  );
};

export default PartnerSection;
