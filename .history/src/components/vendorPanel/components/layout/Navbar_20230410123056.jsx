/** @format */
import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Modal, Form, Button } from "react-bootstrap";

const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Admin Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="outline-success">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
        }
        style={{ backgroundColor: "#263544", color: "#fff" }}
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-#fff-900 hover:scale-90 cursor-pointer"
        />

        <section className="flex sm:ml-auto justify-end sm:w-full items-center space-x-2  pr-2">
          <figcaption className="tracking-wider pl-1 font-semibold">
            <div className="lg:text-base text-sm text-#fff-900  uppercase">
              Welcome
              <img src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png' alt='' />
              <i
                class="fa-sharp fa-solid fa-gear"
                style={{ marginLeft: "10px", cursor: "pointer" }}
                onClick={() => setModalShow(true)}
              ></i>
            </div>
          </figcaption>
        </section>
      </div>
    </>
  );
};

export default Navbar;
