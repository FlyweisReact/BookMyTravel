/** @format */
import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const Navbar = ({ hamb, setHamb }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState("")

  function MyVerticallyCenteredModal(props) {
    const AdminId = localStorage.getItem("AdminId")

    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")
    const [profileImage , setImage ] = useState("")
    

    const ProfileUpdate = async (e) => {
      e.preventDefault()
      try{
        const { data } = await axios.post(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/admminLoginRouter/AdminUpdate/${AdminId}` , {email , password , profileImage})
        console.log(data)
      }catch(e) { 
        console.log(e)
      }
    }


    
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
          <Form onS>
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
            <div
              className="lg:text-base text-sm text-#fff-900  uppercase"
              style={{ display: "flex", gap: "10px"  , alignItems  : 'center'}}
            >
              Welcome
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                style={{
                  width: "40px",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
                onClick={() => setModalShow(true)}
              />
            </div>
          </figcaption>
        </section>
      </div>
    </>
  );
};

export default Navbar;
