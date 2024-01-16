// src/components/Table.js
import  { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const columns = [
    { field: "userId", headerName: "User ID", width: 100 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 500 },
  ];

  return (
    <div style={{ height: 400, width: "100%", color:'white' }}>
      <DataGrid rows={data} columns={columns}  />
    </div>
  );
};

export default Table;
