import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { titles } from "../mock/titles";
import EmployeesContext from "../contexts/employee.context";
import { DataTable } from "@tatlapa/react-datatable-plugin";

interface Employee {
  [key: string]: string | number | Date;
}

const Home = () => {
  const navigate = useNavigate();
  const { employees } = useContext(EmployeesContext) ?? { employees: [] };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1>Current Employees</h1>
      <button
        onClick={() => navigate("/create")}
        className="bg-green-700 text-white rounded-md p-1.5"
      >
        <h2 className="sr-only">list of employees</h2>
        Create Employee
      </button>

      <section className="mt-9 w-2/3">
        <DataTable titles={titles} rows={employees as Employee[]} />
      </section>
    </div>
  );
};

export default Home;
