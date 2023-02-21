/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import HOC from "../../layout/HOC";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Specification() {
  const [data, setData] = useState([]);
  
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/vendorRouter/allusersVendor1"
      );
      setData(data.Users);
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
            All Transactions
          </span>
        
        </div>

        <div style={{ maxWidth: "100%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> Name</th>
                <th> Mobile Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.phone} </td>
                  <td> {i.email} </td>
               
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};


export default HOC(Specification);
