import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import {Link} from 'react-router-dom'
import { columns, data } from "./data";

import "./styles.css";


const FacultySeating = () => {
  const tableData = {
    columns,
    data
  };
  return (
    (localStorage.getItem('token') ? <div>
      <h1 className="text-center"><u>Faculty Seating Plan</u></h1>
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
        />
      </DataTableExtensions>
    </div> : <div className="p-5 mt-4 mb-4 bg-dark text-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">403-Access Denied </h1>
        <p className="col-md-8 fs-4">You need to Login to be able to use this feature.</p>
        <Link type="button" className="btn btn-danger mx-2" to="/login">
          Login <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
        </Link>
      </div>
    </div>
    )
  )
}

export default FacultySeating