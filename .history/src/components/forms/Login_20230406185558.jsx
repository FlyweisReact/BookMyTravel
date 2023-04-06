/** @format */

import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlinePhone } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import axios from "axios";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/vendorRouter/loginVendor",
        { email, password }
      );
      localStorage.setItem("Vendortoken", data.Token);
      localStorage.setItem("VendorId", data.VendorId);
      navigate("/dashboard");
      toast.success("Welcome Vendor");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.success("Check Email & Password");
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center"
        style={{ backgroundColor: "#4b86b4" }}
      >
        <form
          className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10"
          onSubmit={submitHandler}
        >
          <p
            className="text-3xl"
            style={{ color: "#4b86b4", fontWeight: "600" }}
          >
            {" "}
            Vendor Panel{" "}
          </p>
          <section className="py-7 space-y-6">
            {/* Email */}
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type="email"
                placeholder="vendor@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none px-0.5  bg-transparent tracking-wider w-full"
              />
              <AiOutlinePhone className="text-xl " />
            </div>
            {/* Password */}
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type={inputpass ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none px-0.5  bg-transparent tracking-wider w-full"
              />

              <span
                onClick={() => {
                  setPass(!pass);
                  setInputpass(!inputpass);
                }}
                className="text-xl cursor-pointer hover:scale-90 "
              >
                {pass ? <VscEyeClosed /> : <VscEye />}
              </span>
            </div>

            <button
              type="submit"
              className="button2 "
            >
              {loading ? (
                <Oval height={30} secondaryColor="black" color="black" />
              ) : (
                <div className="flex items-center">
                  LOG IN
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn1"
            >
              Admin Panel
            </button>
          </section>
        </form>
      </div>
    </>
  );
};

export default Login;
