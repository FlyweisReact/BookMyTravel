/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import MSG from "./components/vendorPanel/components/pages/Message/Message";
import "react-toastify/dist/ReactToastify.css";
import UserKundli from "./components/pages/UserKundli/UserKundli";
import Discount from "./components/pages/discount/Discount";
import Chat from "./components/pages/reactChat/Chat";
import Horoscope from "./components/pages/horoScope/Horoscope";
import Specification from "./components/pages/SpecificationPage/Specification";
import VendorLogin from "./components/vendorPanel/components/forms/VendorLogin";
import VendorDashboard from "./components/vendorPanel/components/pages/VendorDashboard";
import Fedd from "./components/pages/FeedBack/Fedd";
import Astrologers from "./components/vendorPanel/components/pages/Astrologer/Astrologers";
import Users from "./components/vendorPanel/components/pages/Users/Users";
import Kundli from "./components/vendorPanel/components/pages/Kundli/Kundli";
import AdminHoro from "./components/vendorPanel/components/pages/Horoscope/Horoscope";
import Forgot from "./components/vendorPanel/components/forms/Forgot";
import ResetPassword from "./components/vendorPanel/components/forms/ResetPassword";
import Changepassword from "./components/vendorPanel/components/forms/Changepassword";
import TimeSlots from "./components/pages/TimeSlots/TimeSlots";
import Documents from "./components/pages/Documents/Documents";
import Notify from "./components/pages/Notifications/Notify";
import Booking from "./components/vendorPanel/components/pages/Booking/Booking";
import ProductDetail from "./components/pages/FeedBack/ProductDetail";
import Product from "./components/vendorPanel/components/pages/Products/Product";
import Category from "./components/vendorPanel/components/pages/Category/Category";
import Order from "./components/vendorPanel/components/pages/Orders/Order";
import Complaint from "./components/vendorPanel/components/pages/Complaint/Complaint";
import Vendor from "./components/vendorPanel/components/pages/Vendors/Vendor";
import SubCategory from "./components/pages/Subcategory/SubCategory";
import Tour from "./components/vendorPanel/components/pages/Tour";
import Transaction from "./components/vendorPanel/components/pages/Transaction";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/vendorLogin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userkundli" element={<UserKundli />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/specification" element={<Specification />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="feedback" element={<Fedd />} />
        <Route path="/time" element={<TimeSlots />} />
        <Route path="/document" element={<Documents />} />
        <Route path="/subCategory" element={<SubCategory />} />
        <Route path="/not" element={<Notify />} />
        <Route path="/viewProduct/:id" element={<ProductDetail />} />


        {/* Admin Panel */}
        <Route path="/" element={<VendorLogin />} />
        <Route path="/ven" element={<Vendor />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tour" element={<Tour />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path="/users" element={<Users />} />
        <Route path="/order" element={<Order />} />
        <Route path="/msg" element={<MSG />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
