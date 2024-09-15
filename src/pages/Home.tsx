import { useNavigate } from "react-router-dom";
import { DataTable } from "datatable";
import { employees } from "../mock/employees";
import { titles } from "../mock/titles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1>Current Employees</h1>
      <button
        onClick={() => navigate("/create")}
        className="bg-green-500 text-white rounded-md p-1.5"
      >
        Create Employee
      </button>

      <section className="mt-9 w-2/3">
        <DataTable titles={titles} rows={employees} />
      </section>
    </div>
  );
};

export default Home;
