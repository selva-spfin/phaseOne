import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import PersonalLoan from "./pages/personalLoan";
import AboutUs from "./pages/aboutUs";
import EnquiryForm from "./pages/enquiryForm";
import Services from "./pages/services";
import Products from "./pages/products";
import Calculator from "./pages/calculator";
import FAQ from "./pages/faq";
import Blog from "./pages/blog";
import BusinessLoan from "./pages/businessLoan";
import CreditCard from "./pages/creditCard";
import HomeLoan from "./pages/homeLoan";
import PreOwnedCarLoan from "./pages/preOwnedCarLoan";
import MortgageLoan from "./pages/mortgageLoan";

import Navbar from "./components/navbar";

import { useState } from "react";
import Explore from "./components/explore";
import SubProductPage from "./pages/subProductPage";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <div className="">
      <Navbar setMenuKey={(key: number) => setSelectedMenu(key)} />
      <Routes>
        <Route path="/" element={<Home selectedMenu={selectedMenu} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/enquiry-form" element={<EnquiryForm />} />
        <Route
          path="/explore"
          element={<Explore />}
        />
        {/* <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/sub-product-page" element={<SubProductPage />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/home-loan" element={<HomeLoan />} />
        <Route path="/mortgage-loan" element={<MortgageLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/car-loan" element={<PreOwnedCarLoan />} /> */}
      </Routes>
    </div>
  );
}

export default App;
