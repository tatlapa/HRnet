import React, { createContext, useState } from "react";

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

  const addEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
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
