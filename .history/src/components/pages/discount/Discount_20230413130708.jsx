/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Discount = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const vendorId = localStorage.getItem("VendorId");
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/getpackagesByVendorIdByAdmin/${vendorId}`
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
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [Type, setType] = useState("");
    const [ packageName , setPackageName ] = useState("")
    const [ otherActivity , setOtherActivity ] = useState("")
    const [ day , setDay] = useState("")
    const [itenary , setIternay ] = useState("")
    const [touristDestination, setDestination] = useState("");
    const [location, setLocation] = useState("");
 

    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/packagesByVendor",
          {
            start_date,
            end_date,
            price,
            discount,
            Type,
            day,
            itenary,
            touristDestination,
            location,
            vendorId: vendorId,
          }
        );
        console.log(data);
        props.onHide();
        toast.success("Package Added");
        fetchData();
      } catch (err) {
        console.log(err);
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
            Add Package
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
     
              <>
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
                  <Form.Label>Itinerary day wise </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Inclusion</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Google Location</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Discount</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Activity Day</Form.Label>
                  <FloatingLabel controlId="floatingTextarea" className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Activity Iternary</Form.Label>
                  <FloatingLabel controlId="floatingTextarea" className="mb-3">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      onChange={(e) => setIternay(e.target.value)}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Tourist Destination</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group>
              </>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  function EditPackageModal(props) {
    const [start_date, setStartDate] = useState("");
    const [end_date, setEndDate] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [DiscountedPrice, setDiscountedPrice] = useState("");
    const [Type, setType] = useState("");
    const [packageName, setPackageName] = useState("");
    const [otherActivity, setOtherActivity] = useState("");
    const [day, setDay] = useState("");
    const [itenary, setItenary] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [touristDestination, setTouristDestination] = useState("");
    const [location, setlocation] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [inclusions, setInclusions] = useState("");
    const [Highlightsofpackage, setHighlightsofPackage] = useState("");

    const uploadImage = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
          console.log(data);
          console.log(data?.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/UpdatePackagesPriceByAdmin/${id}`,
          {
            start_date,
            end_date,
            inclusions,
            price,
            DiscountedPrice,
            discount,
            Type,
            packageName,
            otherActivity,
            day,
            itenary,
            longitude,
            latitude,
            touristDestination,
            location,
            category,
            images: image,
            Highlightsofpackage,
            vendorId,
          }
        );
        console.log(data);
        toast.success("Added");
        props.onHide();
        fetchData();
      } catch (e) {
        console.log(e);
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
            Edit Package
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => uploadImage(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPackageName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Highlights</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setHighlightsofPackage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Itinerary day </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDay(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Itinerary Activity </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setItenary(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inclusion</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setInclusions(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setlocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Longitude</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLongitude(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Latitude</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLatitude(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Tourist Destination</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTouristDestination(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discounted Price</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setDiscountedPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Activity</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setOtherActivity(e.target.value)}
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
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <EditPackageModal show={editModal} onHide={() => setEditModal(false)} />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Packages
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Packages
          </Button>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <img
                      src={i.images}
                      alt=""
                      style={{ width: "100px" }}
                    />{" "}
                  </td>
                  <td> {i.packageName} </td>
                  <td> {i.category} </td>
                  <td> {i.Highlightsofpackage?.map((a) => a)} </td>
                  <td>
                    {" "}
                    {i.Activity?.map((a, indd) => (
                      <div style={{ display: "flex", gap: "10px" }} key={indd}>
                        <span> {a.day} </span>
                        <span> {a.itenary} </span>
                      </div>
                    ))}{" "}
                  </td>
                  <td> {i.inclusions?.map((a) => a)} </td>
                  <td>
                    {" "}
                    <span>
                      Longitude : {i.googleLocation?.[0]?.longitude}
                    </span>{" "}
                    <span>Latitude : {i.googleLocation?.[0]?.latitude}</span>{" "}
                  </td>
                  <td> {i.location} </td>
                  <td> {i.touristDestination} </td>
                  <td> ₹{i.price} </td>
                  <td> {i.discount}% </td>
                  <td> {i.DiscountedPrice} </td>
                  <td> {i.Type} </td>
                  <td> {i.start_date?.slice(0, 10)} </td>
                  <td> {i.end_date?.slice(0, 10)} </td>
                  <td> {i.otherActivity} </td>
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
                        onClick={() => {
                          setId(i._id);
                          setModalShow(true);
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-file-pen"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setId(i._id);
                          setEditModal(true);
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

export default HOC(Discount);
