/** @format */

import { RiMenu4Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const VendorId = localStorage.getItem("VendorId");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const putHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/vendorRouter/updateVendor1/${VendorId}`,
        { name, email, phone, password, confirmPassword }
      );
      console.log(data);
      alert("Updated");
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={putHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-green-200 space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-green-200 space-x-4"
        }
        style={{ backgroundColor: "#263544", color: "#fff" }}
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-#fff-900 hover:scale-90 cursor-pointer"
        />

        {/* Profile */}
        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <span className="cursor-pointer text-2xl">
            {/* <IoMdNotifications /> */}
          </span>
          <figcaption className="tracking-wider pl-1 font-semibold">
            {" "}
            <div className="lg:text-base text-sm text-#fff-900  uppercase">
              Welcome
            </div>
          </figcaption>
        </section>
        <CgProfile
          onClick={() => setModalShow(true)}
          className="text-2xl sm:text-3xl font-bold text-[#fff] cursor-pointer"
        />
      </div>
    </>
  );
};

export default Navbar;
