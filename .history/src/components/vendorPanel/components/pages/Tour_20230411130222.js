import React from 'react'
import HOC from '../layout/HOC'
import { Table , Modal , Form , Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Tour = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const [ id , setId] = useState("")

  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/getAllpopular"
        );
        setData(data.getAllpopular);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const deleteData = async (id) => {
      try{
        const { data } = await axios.delete(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/deletepopulartour1/${id}`)
        console.log(data.message)
        toast.success('Vendor Deleted')
        fetchData()
      }catch(err){
        console.log(err)
      }
    }

    function MyVerticallyCenteredModal(props) {

      const [country , setCountry ] = useState("")
      const [city , setCity ] = useState("")
      const [touristDestination , setTouristDestination ] = useState("")

      const putHandler = async (e) =>{
        e.preventDefault()
        try{
          const { data } = await axios.put(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/Updatepopulartour1/${id}` , {
            country , 
            city , 
            touristDestination
          })
          console.log(data)
          fetchData()
          props.onHide()
          alert("Updated")
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
              Edit Tour
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form >
            <Form.Group className='mb-3'>
              <Form.Label>City</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Country</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Tour Destination</Form.Label>
              <Form.Control type='text' />
            </Form.Group>
            <Button variant='outline-success'>Submit</Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
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
          </div>
  
          <div style={{ maxWidth: "100%", overflow: "auto" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> City</th>
                  <th> Country</th>
                  <th>Tour Destination</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.city} </td>
                    <td> {i.country} </td>
                    <td> {i.touristDestination?.map(( i , index ) => (
                      <p key={index } > {i} </p>
                    ))} </td>
                    <td>

                    <div style={{display : 'flex' , gap : '10px'}}>
                    <i
                        className="fa-sharp fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteData(i._id)}
                      ></i>
                   
                    <i
                        className="fa-sharp fa-solid fa-edit"
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

export default HOC(Tour)