import Router from "./router/Router";
import { RouterProvider } from "react-router-dom";
import { EmployeesProvider } from "./contexts/employee.context";

const App = () => {
  return (
    <EmployeesProvider>
      <RouterProvider router={Router} />
    </EmployeesProvider>
  );
};

export default App;
