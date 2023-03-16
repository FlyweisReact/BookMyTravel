/** @format */

import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";
import { toast } from "react-toastify";

const Product = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/getallpackagesByAdmin"
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/DeleteByAdmin/${id}`
      );
      console.log(data);
      toast.success("Package Deleted");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

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
            Edit Package
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Vedio/Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Highlights</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Highlights</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Highlights</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Tourist Destination</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discounted Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Activity</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
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
            All Packages
          </span>
        </div>

        <div style={{ maxWidth: "900px", overflow: "auto", margin: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Video/Image </th>
                <th>Name</th>
                <th>Category</th>
                <th>Highlights</th>
                <th>Itinerary day wise</th>
                <th>Inclusions </th>
                <th>Google Location </th>
                <th> Location </th>
                <th> Tourist Destination </th>
                <th>Price</th>
                <th>Discount</th>
                <th>Discounted Price</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Activity</th>
                <th>Vendor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <img
                      src="https://www.shutterstock.com/image-photo/famous-monuments-world-grouped-together-260nw-313571078.jpg"
                      alt=""
                      style={{ width: "100px" }}
                    />{" "}
                  </td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Highlights</td>
                  <td>Itinerary day wise</td>
                  <td>Inclusions</td>
                  <td>Google Location</td>
                  <td> {i.location} </td>
                  <td> {i.touristDestination} </td>
                  <td> {i.price} </td>
                  <td> {i.discount}% </td>
                  <td> {i.DiscountedPrice} </td>
                  <td> {i.Type} </td>
                  <td> {i.start_date?.slice(0, 10)} </td>
                  <td> {i.end_date?.slice(0, 10)} </td>
                  <td style={{ minWidth: "400px" }}>
                    <ul>
                      {i.Activity?.map((i, index) => (
                        <span key={index}>
                          {" "}
                          {i} ,{" "}
                        </span>
                      ))}
                    </ul>
                  </td>
                  <td> {i.vendorId} </td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <i
                        class="fa-sharp fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteData(i._id)}
                      ></i>
                      <i
                        class="fa-sharp fa-solid fa-edit"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => setModalShow(true)}
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

export default HOC(Product);
