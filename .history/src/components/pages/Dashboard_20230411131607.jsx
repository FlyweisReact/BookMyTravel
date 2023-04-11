import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { MdDashboardCustomize, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {

  const [ tourCount , setTourCount ] = useState("")
  const [ packageCount , setPackageCount ] = useState("")
  const [ couponCount , setCouponCount ] = useState("")
  const [ bookingCount , setBookingCount  ] = useState("")
  const [ transactionCount , setTransactionCount  ] = useState("")


  const getTour = async () =>{
    try { 
      const { data } = await axios.get(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/populartourRouter/getAllpopulartourVendor`)
      setTourCount(data.getAllpopulardestination.length)
    }catch(e) { 
      console.log(e)
    }
  }

  const getPackage = async () =>{
    try { 
      const { data } = await axios.get(`https://oyi65hi3pd.execute-api.ap-south-1.amazonaws.com/development/packagesRouter/getallTypeOfpackagegesByVendor`)
      setPackageCount(data.data.length)
    }catch(e) { 
      console.log(e)
    }
  }

  useEffect(() => {
    getTour()
    getPackage()
  },[])

  const card = [
    {
      progress: "bg-blue-400",
      title: "All Tour",
      number: tourCount,
      icon: <FaUserFriends className="text-2xl text-[rgb(241,147,48)]" />,
    },
    {
      progress: "bg-green-400",
      title: "All Package",
      number: "100",
      icon: (
        <MdOutlineLibraryBooks className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
    {
      progress: "bg-yellow-400",
      title: "All Notifications",
      number: "150",
      icon: (
        <MdDashboardCustomize className="text-2xl text-[rgb(241,147,48)]" />
      ),
    },
  ];
  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4" >
        {/* Card */}
        {card.map((card , index) => {
          return (
            <div className="px-5 py-8 bg-slate-200 hover:bg-green-200 space-y-2 shadow-xl flex flex-col  rounded-md" key={index}>
              <div className="grid  justify-between grid-cols-4">
                <div className="flex flex-col col-span-3 space-y-1">
                  <span className="tracking-widest text-gray-900">
                    {card.title}
                  </span>
                  <span className="tracking-wider text-gray-700 text-xl md:text-2xl font-semibold">
                    {card.number}
                  </span>
                </div>
                {/* Icons */}
                <div className="flex rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white justify-center items-center">
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HOC(Dashboard);