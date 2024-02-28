/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="bg-slate-950 text-gray-400">
        <div className="container mx-auto p-2 md:p-3 ">
          <p className="border-b p-5 text-center text-sm md:text-lg">
            Group Websites : | www.spfinnacle.com |
          </p>
          <div className="flex items-center justify-between border-b p-2 text-sm md:text-lg">
            <p>Follow us on :</p>
            <div>
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="h-5 w-5 p-2 md:h-8 md:w-8"
                icon={faTwitter}
              />
            </div>
          </div>
          <p className="p-5 text-center text-sm md:text-lg">
            &copy;2023 SPF | All rights reserved | Disclaimer & Privacy Policy
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
