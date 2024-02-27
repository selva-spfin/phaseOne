import { IoIosArrowDown } from "react-icons/io";
import { askedQuestions } from "../constants/faq.js";

const FAQ = () => {
  return (
    <div id="faq">
      <section className="flex  font-montserrat tracking-wide mt-2 ">
        <div className="w-full overflow-hidden rounded-md  border border-[#B4B4B8] ">
          {askedQuestions.map((question) => (
            <div className="relative mt-[1px] rounded-md ">
              <input
                type="checkbox"
                id="collapse-menu"
                className="peer absolute inset-x-0 top-0 z-10  h-full w-full cursor-pointer appearance-none "
              />
              <div className=" h-20 md:h-16 w-full  bg-white p-3 text-black">
                <h1 className="absolute top-5 text-xl font-normal ">
                  {question.no}
                  {question.question}
                </h1>
              </div>
              <div className="absolute hidden md:block  right-4 top-5 rotate-0 text-black transition-transform duration-500 peer-checked:rotate-180 peer-checked:text-[#C7C8CC]">
                <IoIosArrowDown className="text-2xl" />
              </div>
              <div className=" h-0 origin-right overflow-hidden bg-[#efefef] text-xl text-black transition-transform duration-500 ease-in-out peer-checked:h-full ">
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
