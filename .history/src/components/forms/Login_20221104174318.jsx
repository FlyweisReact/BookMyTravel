import React, { useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlinePhone } from "react-icons/ai";
import {  BiLogInCircle } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mobile_Number, setN] = useState("");
  const [password, setP] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://astrologer-panel.herokuapp.com/admin/login-admin",
        {
          mobile_Number,
          password,
        }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem('AdminId' , data?.user?._id)
      navigate("/dashboard");
      toast.success("Welcome");
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
        <form className="shadow-2xl w-96 mx-3 sm:mx-0 sm:w-4/5 md:w-4/6 lg:w-4/5 xl:w-1/2 flex flex-col items-center bg-white p-5 md:py-10 rounded-tl-3xl rounded-br-3xl">
          <p className="text-3xl"> Astrologers Panel </p>
          <section className="py-7 space-y-6">
            {/* Email */}
            <div className="shadow-2xl sm:w-96 border border-[rgb(241,146,46)] space-x-4 flex items-center w-64  p-2 rounded-md">
              <input
                type="tel"
                placeholder="8800694296"
                required
                onChange={(e) => setN(e.target.value)}
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
                onChange={(e) => setP(e.target.value)}
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
            <span onClick={() => navigate('/otp')} style={{color :'blue' , cursor : 'pointer'}}>
              Forgot Password
            </span>
            <button
              type="submit"
              className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium   "
              onClick={submitHandler}
            >
              {loading ? (
                <Oval height={30} secondaryColor="black" color="black" />
              ) : (
                <div className="flex items-center">
                  <span className="flex items-center justify-center">
                    LOG In
                  </span>

                  <BiLogInCircle className="pl-1.5 text-2xl" />
                </div>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate("/vendorLogin")}
              className="py-2 cursor-pointer tracking-wider bg-orange-600 flex justify-center items-center w-full rounded-md font-medium   "
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
