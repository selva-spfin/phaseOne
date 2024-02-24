import React from "react";
import { bankImages } from "../constants/images.js";

const PartnerSection = () => {
  return (
    <div className="grid grid-cols-3  items-center justify-items-center p-4 md:px-5 md:py-8 lg:grid-cols-5">
      {bankImages.map((image) => (
        <img
          src={image}
          className="size-2/6 md:size-3/6"
          alt="partnerLogo"
        ></img>
      ))}
    </div>
  );
};

export default PartnerSection;
