import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";

const CouponAdmin = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [ edit  , setEdit ] = useState(false)

  
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
            {edit ? 'Edit Coupons' : "Add Coupons"}
             </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form o>
              <Form.Group className="mb-3">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Activation Date</Form.Label>
                <Form.Control type="date"  />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Button variant="outline-success" type='submit'>Submit</Button>
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
              All Tours
            </span>
            <Button variant="outline-success" onClick={() =>{ setModalShow(true)
            setEdit(true)
            }}>
              Add Tour
            </Button>
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> City</th>
                  <th> Country</th>
                  <th>Tour Destinatiomn</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.city} </td>
                    <td> {i.country} </td>
                    <td>
                      {" "}
                      {i.touristDestination?.map((i, index) => (
                        <p key={index}> {i} </p>
                      ))}{" "}
                    </td>
                    <td>
                    <div style={{display : 'flex' , gap : '10px'}}>
  
                      <i
                        class="fa-sharp fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteData(i._id)}
                      ></i>
  
                      <i
                        class="fa-sharp fa-solid fa-edit"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setEdit(true)
                          setModalShow(true)
                        }}
                      ></i>
                    </div>
  
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </>
    );
  };
export default HOC(CouponAdmin)