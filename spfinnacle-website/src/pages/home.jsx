import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faLandmark,
  faPeopleLine,
  faFileSignature,
  faLaptopFile,
  faComments,
  faPaste,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import PartnerSection from '../components/partnerSection';

const Home = () => {
  return (
    <>
      <main className=' *:font-montserrat'>
        <Navbar />
        <section className='bg-gradient-to-l from-[#EF2670] via-rose-400   to-pink-300 px-5 py-8 lg:px-0 lg:py-16'>
          <div className='container mx-auto flex  p-3'>
            <div className='hidden max-w-full object-cover lg:block '></div>
            <div className='w-full rounded-lg bg-green-200 p-10 lg:rounded-none lg:p-16'>
              <h1 className='text-3xl'>At a Glance</h1>
              <p className='pt-5 indent-16  text-lg'>
                SPF has been formed to primarily addressed the Personal finance
                needs of self employed , Low and Middle Income families
                primarily from semi urban and rural areas.Despites the vibrant
                growth of the personal finance sector especially over the past
                few years.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Home;
