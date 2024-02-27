import { useEffect } from "react";
import Footer from "../components/footer";
import AboutUs from "./aboutUs";
import Services from "./services";
import Products from "./products";
import EnquiryForm from "./enquiryForm";
import BusinessLoan from "./businessLoan";
import Explore from "../components/explore";

const Home = ({ selectedMenu }) => {
  useEffect(() => {}, []);

  return (
    <>
      <main className=" *:font-montserrat">
        <BusinessLoan />

        <AboutUs />

        <Services />
        <Products />
        <Explore selectedMenu={selectedMenu} />
        <EnquiryForm />
      </main>
    </>
  );
};

export default Home;
