import React from 'react'
import HOC from '../layout/HOC'
import { Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Tour = () => {
    const [data, setData] = useState([]);
  
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
  
    return (
      <>
     
  
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
                  <th>Tour Destinatino</th>
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
                      <i
                        class="fa-sharp fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteData(i._id)}
                      ></i>
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