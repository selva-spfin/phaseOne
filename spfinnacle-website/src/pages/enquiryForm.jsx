import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { colors } from "../constants/colors";
import whatsappIcon from "../assets/WhatsAppIcon.svg";
import emailjs from "@emailjs/browser";
import { socialMediaIcons } from "../constants/images";

const EnquiryForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qlg3roy",
        "template_4eaqnun",
        form.current,
        "rdd5jVCHkgsR0vRu3",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  const para = `Let's discuss on 
  something cool together`;

  return (
    <div id="enquiry-form" style={{ backgroundColor: colors.primaryColor }}>
      <section className="container mx-auto items-center justify-between p-4 lg:flex  lg:py-8 ">
        <div className="lg:w-2/3 ">
          <p className="text-2xl text-white  ">{para}</p>
          <div className="lg:mb-5  lg:mt-[325px]">
            <Link className="flex gap-10">
              {socialMediaIcons.map((icons) => (
                <img
                  src={icons}
                  alt={icons}
                  className="h-6 w-6 lg:h-8 lg:w-8 "
                />
              ))}
            </Link>
          </div>
          <div className="text-white">
            <p>PrivacyPolicy & TermsConditions</p>
          </div>
        </div>
        <div className="  h-auto  rounded-3xl bg-white p-5 lg:w-1/3 lg:p-6">
          <form
            className="flex flex-col"
            action=""
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 text-lg font-semibold text-[#2B75BC]  "
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                className="mb-2 w-10/12 rounded border-b border-gray-400 bg-transparent p-1 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670]  "
                placeholder=" Full Name"
                required
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="num"
                className="mb-1 text-lg  font-semibold text-[#2B75BC] "
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="user_number"
                id="num"
                className="mb-2 w-10/12 rounded border-b border-gray-400 bg-transparent p-1 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] "
                placeholder="10 Digit Number"
                required
                minLength={10}
                maxLength={10}
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="mail"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] "
              >
                Email Id
              </label>
              <input
                type="email"
                name="user_email"
                id="mail"
                className="mb-2 w-10/12 rounded border-b border-gray-400 bg-transparent p-1 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670]  "
                placeholder="Email Id"
                required
              />
            </div>

            <div className="mb-2 flex flex-col">
              <label
                htmlFor="pin"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] "
              >
                Pin Code
              </label>
              <input
                type="text"
                name="user_pincode"
                id="pin"
                className=" mb-2 w-10/12  rounded border-b border-gray-400 bg-transparent p-1 text-lg outline-none focus:border-none focus:ring-2  focus:ring-[#EF2670] "
                placeholder=" Pincode"
                maxLength={6}
                required
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="user-loan-type"
                className="mb-1 text-lg font-semibold  text-[#2B75BC] "
              >
                Enquiry Type
              </label>
              <select
                name="loan-type"
                id="user-loan-type"
                className="mb-2 w-10/12 rounded border-b border-gray-400 bg-transparent p-1 text-lg outline-none focus:border-none focus:text-black focus:ring-2  focus:ring-[#EF2670] "
              >
                <option value=" Select Loan type" selected required>
                  Select Loan type
                </option>
                <option value="personal-loan">Personal Loan</option>
                <option value="housing-loan">Housing Loan</option>
                <option value="loan-against-property">
                  Loan against Property
                </option>
              </select>
            </div>

            <div>
              <button
                // style={{ backgroundColor: colors.logoBlue }}
                type="submit"
                className=" overflow-hidden rounded-full border border-[#2B75BC] px-3 py-2 text-lg   text-[#2B75BC] transition-all  duration-500 hover:border-white hover:bg-[#EF2670]  hover:text-white hover:ring-[#EF2670]  "
              >
                Request to Contact
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="fixed bottom-8 right-5 size-14">
        <a
          href="https:/wa.me/+91and8012637346"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappIcon} alt="enquiry-logo" />
        </a>
      </div>
    </div>
  );
};

export default EnquiryForm;
