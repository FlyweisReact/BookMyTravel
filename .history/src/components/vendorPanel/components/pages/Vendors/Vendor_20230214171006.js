
import HOC from "../../layout/HOC";
import {} from  'react-bootstrap'


const Users = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Vendors
          </span>
        </div>


        <div style={{ maxWidth: "100%", overflow: "auto" }}>

        </div>
      </section>
    </>
  );
};

export default HOC(Users);
