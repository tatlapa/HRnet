import React, { createContext, useState, useEffect } from "react";

interface Employee {
  firstName: string;
  lastName: string;
  startDate: string | Date;
  department: string;
  birthDate: string | Date;
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface EmployeesContextType {
  employees: Employee[];
  addEmployee: (employee: Employee) => void;
}

const EmployeesContext = createContext<EmployeesContextType | null>(null);

export const EmployeesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      try {
        const parsedEmployees = JSON.parse(storedEmployees);
        if (Array.isArray(parsedEmployees)) {
          setEmployees(parsedEmployees);
        } else {
          console.error("Stored employees data is not an array");
        }
      } catch (error) {
        console.error("Error parsing stored employees data", error);
      }
    }
  }, []);

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  return (
    <EmployeesContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesContext;
