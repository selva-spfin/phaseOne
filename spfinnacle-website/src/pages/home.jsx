import Navbar from '../components/navbar';
import Footer from '../components/footer';

import AboutUs from './aboutUs';
import Services from './services';
import Products from './products';
import EnquiryForm from './enquiryForm';

const Home = () => {
  return (
    <>
      <main className=' *:font-montserrat'>
        <Navbar />

        <personalLoan />
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
