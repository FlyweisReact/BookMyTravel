/** @format */

import React, { useEffect, useState } from "react";
import { Table} from "react-bootstrap";
import axios from "axios";
import HOC from "../../layout/HOC";

const Order = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/booknowRouter/getbookByAdmin"
      );
      setData(data);
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
            All Bookings (Total : {data.length})
          </span>
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th>Destination</th>
                <th>Start Date</th>
                <th>End  Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.userName} </td>
                  <td> {i.packageObject?.touristDestination} </td>
                  <td> {i.packageObject?.start_date.slice(0,10)} </td>
                  <td> {i.packageObject?.end_date.slice(0,10)} </td>
                  <td> {i.packageObject?.price} </td>
                  <td> {i.Status} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Order);
