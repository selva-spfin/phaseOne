import React from "react";
import Navbar from "../components/navbar";
import PartnerSection from "../components/partnerSection";

const Services = () => {
  return (
    <main className="">
      <Navbar />
      <section className="bg-[#EF2670]/70 p-10 text-white">
        <p className="text-justify indent-8 text-xl tracking-wider first-letter:text-4xl first-letter:text-[#2B75BC]">
          Discover streamlined finance loan process services designed to
          simplify borrowing. Our platform offers a seamless application
          process, personalized loan options, and competitive interest rates.
          With convenient features like online account management and quick
          approval turnaround times, securing the financing you need has never
          been easier. Experience hassle-free borrowing with our comprehensive
          finance loan process services.
        </p>
      </section>
      <section className="p-5">
        <PartnerSection />
      </section>
    </main>
  );
};

export default Services;
