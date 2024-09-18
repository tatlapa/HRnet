import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { titles } from "../mock/titles";
import EmployeesContext from "../contexts/employee.context";
import { DataTable } from "@tatlapa/react-datatable-plugin";
import "/node_modules/@tatlapa/react-datatable-plugin/dist/style.css";

const Home = () => {
  const navigate = useNavigate();
  const { employees } = useContext(EmployeesContext) ?? { employees: [] };

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
