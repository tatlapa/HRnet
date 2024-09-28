# HR Net Application

HR Net is a web application designed to manage employee information, featuring two main pages: "Create" and "Home".

This document provides an overview of the application's main functionalities.

_This project was completed as part of my "Software Developer - React" training program._

## Features

The main goal of this project was to upgrade from [an old JQuery-based](https://github.com/OpenClassrooms-Student-Center/P12_Front-end) version to a modern React-based application. Additionally, the project aimed to develop modular components that could be reused in other applications. One significant component developed is a paginated table, which includes features for pagination, filtering, and sorting data. You can find the standalone version of this component here:

- [GitHub](https://github.com/tatlapa/ReactPlugin-datatable)
- [NPM](https://www.npmjs.com/package/@tatlapa/react-datatable-plugin)

The repository also includes a performance comparison between the JQuery and React versions of the application using Lighthouse.

### Create

The "Create" page includes a form. When the form is successfully submitted, the new employee data is stored in the user's localStorage to prevent data loss upon page refresh or closure and can be use in any component by using useContext. This page utilizes three imported components :
- react-datepicker
- react-select
- react-toastify

### Home

The "Home" page use the EmployeesContext for get all employee stored in localStorage and displays them using a custom table component. This table offers several features:
- Pagination to control the number of records displayed per page.
- Sorting to arrange records in ascending or descending order based on any field.
- Filtering to search for records based on user-input text.

## Run Locally

To run the application locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/tatlapa/hrnet
```

Navigate to the project directory:

```bash
cd hrnet
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```