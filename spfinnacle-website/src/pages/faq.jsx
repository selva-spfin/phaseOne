import React from "react";
import Navbar from "../components/navbar";
import { IoIosArrowDown } from "react-icons/io";
import { askedQuestions } from "../constants/faq.js";

const FAQ = () => {
  return (
    <div className="">
      <Navbar />
      {/* <section className="flex justify-end  font-montserrat tracking-wide ">
        <div className="w-3/4 overflow-hidden rounded-md  border border-[#2B75BC] ">
          <div className="relative  rounded-md  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                1. What is finance consulting?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consulting involves providing expert advice and guidance
                to businesses and individuals on financial matters such as
                financial planning, budgeting, investment strategies, risk
                management, and regulatory compliance.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                2.What are the key roles of a finance consultant?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants typically analyze financial data, identify
                areas for improvement, develop strategies to enhance financial
                performance, and provide recommendations to clients based on
                their specific needs and goals.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                3.How can finance consulting benefit businesses?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consulting can help businesses make informed financial
                decisions, optimize their financial processes, reduce risks,
                improve profitability, and achieve their long-term financial
                objectives.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                4.What qualifications and expertise do finance consultants
                possess?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants often have backgrounds in finance,
                accounting, economics, or related fields, along with relevant
                certifications such as Chartered Financial Analyst (CFA) or
                Certified Public Accountant (CPA)
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                5.What types of services do finance consultants offer?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants offer a wide range of services including
                financial analysis, strategic planning, investment management,
                risk assessment, mergers and acquisitions, and regulatory
                compliance.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
              <h1 className="absolute top-5 text-xl font-normal ">
                6.How do finance consultants analyze financial data?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants utilize various analytical tools and
                techniques to assess financial statements, identify trends,
                evaluate performance metrics, and make data-driven
                recommendations.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className="h-20 w-full bg-[#2B75BC]  p-3 text-white md:h-16">
              <h1 className="absolute top-5 text-xl font-normal ">
                7.How can finance consulting help with financial planning and
                budgeting?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consulting involves developing comprehensive financial
                plans, setting realistic budgets, forecasting cash flows, and
                identifying opportunities for cost savings and revenue growth.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className="h-20 w-full bg-[#2B75BC]  p-3 text-white md:h-16">
              <h1 className="absolute top-5 text-xl font-normal ">
                8.What strategies do finance consultants employ to optimize
                financial performance?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants may recommend strategies such as improving
                operational efficiency, implementing cost-cutting measures,
                optimizing capital structure, and diversifying investment
                portfolios.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className="h-20 w-full bg-[#2B75BC]  p-3 text-white md:h-16">
              <h1 className="absolute top-5 text-xl font-normal ">
                9.How do finance consultants assist with risk management?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consultants help businesses identify and assess
                financial risks, develop risk mitigation strategies, and
                implement risk management frameworks to protect against
                unforeseen events.
              </p>
            </div>
          </div>
          <div className="relative mt-[1px]  ">
            <input
              type="checkbox"
              id="collapse-menu"
              className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
            />
            <div className="h-20 w-full bg-[#2B75BC]  p-3 text-white md:h-16">
              <h1 className="absolute top-5 text-xl font-normal ">
                10.What are the typical industries that utilize finance
                consulting services?
              </h1>
            </div>
            <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
              <IoIosArrowDown className="text-3xl" />
            </div>
            <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
              <p className="p-4 text-justify indent-10 ">
                Finance consulting services are utilized by a wide range of
                industries including banking, insurance, healthcare, technology,
                manufacturing, and professional services.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="flex justify-end   font-montserrat tracking-wide ">
        <div className="w-3/4 overflow-hidden rounded-md  border border-[#2B75BC] ">
          {askedQuestions.map((question) => (
            <div className="relative mt-[1px] rounded-md ">
              <input
                type="checkbox"
                id="collapse-menu"
                className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
              />
              <div className=" h-16 w-full  bg-[#2B75BC] p-3 text-white">
                <h1 className="absolute top-5 text-xl font-normal ">
                  {question.no}
                  {question.question}
                </h1>
              </div>
              <div className="absolute  right-4 top-5 rotate-0 text-[#EF2670] transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-white">
                <IoIosArrowDown className="text-3xl" />
              </div>
              <div className=" h-0 origin-right overflow-hidden bg-[#EF2670] text-xl text-white transition-transform duration-500 ease-in-out peer-checked:h-full ">
                <p className="p-4 text-justify indent-10 ">{question.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
