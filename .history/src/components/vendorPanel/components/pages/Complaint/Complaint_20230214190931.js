/** @format */
import React, { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";



const Complaint = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/enquiryRouter/getEnqiryAdmin"
      );
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
   
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Enquiry (Total : {data.length})
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th> Mobile Number</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.phone} </td>
                  <td> {i.email} </td>
                  <td> {i.State} </td>
                  <td> {i.Country} </td>
                  <td> {i.Expected_Date_of_Arrival} </td>
                  <td> {i.Expected_Date_of_Departure} </td>
                  <td> {i.Grown_Ups_Above_13_years} </td>
                  <td> {i.Children_5_13_years} </td>
                  <td> {i.Grown_Ups_Above_13_years} </td>
                  <td> {i.Grown_Ups_Above_13_years} </td>
                
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};


export default HOC(Complaint);
