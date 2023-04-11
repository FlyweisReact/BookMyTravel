/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import HOC from "../../layout/HOC";

const CouponAdmin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  const [ data , setData ] = useState([])

  const fetchData = async () => {
    try { 
      const { data } = await axios.get("https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/coupen/getcoupenvendor") 
      setData(data)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

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
            {edit ? "Edit Coupons" : "Add Coupons"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form o>
            <Form.Group className="mb-3">
              <Form.Label>Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Activation Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Minimum Order</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
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

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Coupons
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
              setEdit(true);
            }}
          >
            Add Coupons
          </Button>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Code</th>
                <th> Discount</th>
                <th>Minimum Order</th>
                <th>Activation Date</th>
                <th>Expiration Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JUNE35</td>
                <td>50%</td>
                <td>350Rs</td>
                <td>12/10/2022</td>
                <td>12/12/2022</td>
                <td>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <i
                      class="fa-sharp fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                    ></i>

                    <i
                      class="fa-sharp fa-solid fa-edit"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        setEdit(true);
                        setModalShow(true);
                      }}
                    ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};
export default HOC(CouponAdmin);
