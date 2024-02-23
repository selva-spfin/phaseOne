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
import SubProductPage from "./pages/subProductPage";
import Navbar from "./components/navbar";
import MyTabs from "./pages/myTabs";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<MyTabs />} />
        <Route path="/faq" element={<MyTabs />} />
        <Route path="/blog" element={<MyTabs />} />

        <Route path="/business-loan" element={<BusinessLoan />} />
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/home-loan" element={<HomeLoan />} />
        <Route path="/mortgage-loan" element={<MortgageLoan />} />
        <Route path="/personal-loan" element={<PersonalLoan />} />
        <Route path="/car-loan" element={<PreOwnedCarLoan />} />
        <Route path="/sub-product-page" element={<SubProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
