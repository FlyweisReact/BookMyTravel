/** @format */

import { RiMenu4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
     
      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
        }
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-gray-900 hover:scale-90 cursor-pointer"
        />

        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <figcaption className="tracking-wider pl-1 font-semibold">
            <div className="lg:text-base text-sm text-gray-900  uppercase">
              Welcome
            </div>
          </figcaption>
        </section>

        <CgProfile
          onClick={() => setModalShow(true)}
          className="text-2xl sm:text-3xl font-bold text-[rgb(241,146,46)] cursor-pointer"
        />
      </div>
    </>
  );
};

export default Navbar;
