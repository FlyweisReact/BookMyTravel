import { useState } from "react";
import { Button  } from "react-bootstrap";
import HOC from "../../layout/HOC";;



const Category = () => {
  const [ data , setData ] = useState([ ])
  const fetchData  = async () => {
    
  }
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banners
          </span>
          <Button variant="outline-success">Add Banner</Button>
        </div>
        
        <div className=".main-card--container">
      
        </div>
      </section>
    </>
  );
};

export default HOC(Category);
