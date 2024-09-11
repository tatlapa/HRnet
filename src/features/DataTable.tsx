import FieldTitle from "../components/utils/FieldTitle";
import RowTable from "../components/utils/RowTable";
import { title } from "../mock/title";
import { employees } from "../mock/employees";

const DataTable = () => {
  const isAvailable = employees.length === 0;
  const totalEntries = employees.length;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          Show
          <select className="mx-1 border-2 border-black rounded-md">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          entries
        </div>
        <div className="flex gap-2 items-center">
          Search:
          <input type="text" className="border-2 border-black rounded-md p-1" />
        </div>
      </div>
      <table>
        <thead>
          <tr role="row">
            {title.map((item, index) => (
              <FieldTitle id={index} key={index} title={item.title} />
            ))}
          </tr>
        </thead>
        <tbody>
          {isAvailable ? (
            <tr role="row">
              <td
                valign="top"
                colSpan={9}
                className="text-center bg-gray-100 border-y border-black py-3"
              >
                No data available in table
              </td>
            </tr>
          ) : (
            employees.map((employee, index) => (
              <tr role="row" key={index}>
                <RowTable
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  startDate={employee.startDate}
                  department={employee.department}
                  birthDate={employee.birthDate}
                  street={employee.street}
                  city={employee.city}
                  state={employee.state}
                  zip={employee.zip}
                />
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <p>
          {isAvailable
            ? "Showing 0 to 0 of 0 entries"
            : `Showing 1 to ${totalEntries} of ${totalEntries} entries`}
        </p>
        <div className="flex gap-3 items-center">
          <a>Previous</a>
          <span className="bg-gray-100 py-2 px-4 border-2 rounded-sm">
            <a>1</a>
          </span>
          <a>Next</a>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
