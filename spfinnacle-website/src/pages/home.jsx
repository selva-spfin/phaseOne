import Footer from "../components/footer";
import AboutUs from "./aboutUs";
import Services from "./services";
import Products from "./products";
import EnquiryForm from "./enquiryForm";
import BusinessLoan from "./businessLoan";

const Home = () => {
  return (
    <>
      <main className=" *:font-montserrat">
        <BusinessLoan />
        <AboutUs />
        <Services />
        <Products />
        <EnquiryForm />
        <Footer />
      </main>
    </>
  );
};

export default Home;
