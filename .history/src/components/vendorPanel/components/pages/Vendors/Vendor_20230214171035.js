
import HOC from "../../layout/HOC";
import {Table} from  'react-bootstrap'


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
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>L</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Users);
