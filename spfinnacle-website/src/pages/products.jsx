import { Link } from "react-router-dom";

import product from "../assets/ProductImage.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Products = () => {
  return (
    <main id="products" className="lg:h-screen">
      <section className=" bg-gradient-to-b  from-[#EF2670]/60 p-10 text-white">
        <div className="gap-5 lg:flex ">
          <div className="flex w-full flex-col  items-center justify-center gap-10  lg:w-2/4">
            <h1 className=" text-xl font-bold text-blue-300 lg:text-3xl">
              Lead Management System
            </h1>
            <p className="text-justify indent-16 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim hic
              praesentium deleniti, ut harum, excepturi rerum, eveniet
              voluptates iusto sit ex atque dignissimos dolorem magni dolore
              doloribus quia odit architecto odit Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Culpa, doloremque!
            </p>
            <button className=" place-self-end rounded-full border bg-[#2B75BC] px-5 py-2 ">
              <Link to="/sub-product-page" className="flex items-center gap-2">
                Get in touch
                <span>
                  <FaArrowRightLong />
                </span>
              </Link>
            </button>
          </div>
          <div className="hidden w-2/4 lg:block">
            <img
              className=" h-full transition-transform "
              src={product}
              alt="productPage"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
