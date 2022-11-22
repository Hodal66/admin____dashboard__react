/* eslint-disable no-undef */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import PreviewIcon from "@mui/icons-material/Preview";
import { UserRows } from "../../UserData";
import "./userList.css";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    editable: true,
    renderCell: (params) => {
      //Here you can create a function inside the cell that can return any things you want
      return (
        <div className="userListUser">
          <img className="userImage" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 200,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
    renderCell: (params) => {
      return <div>{params.row.status}</div>;
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 100,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    action: ["update", <DeleteSweepIcon />],
    width: 110,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (action) => {
      return (
        <div className="action__container">
          <button className="actionButton viewRecord">
            <PreviewIcon />
          </button>

          <Link to={"/user-edit/" + action.row.id}>
            <button className="actionButton modify">
              {action.row.action[0]}
            </button>
          </Link>
          <button
            className="actionButton danger "
            onClick={() => handleDelete(action.row.id)}
          >
            {action.row.action[1]}
          </button>
        </div>
      );
    },
  },
];

function UserList() {
  const [userData, setUserData] = useState(UserRows);

  const handleDelete = (id) => {
    console.log("You clicked here??>>", id);
    setUserData(userData.filter((item) => item.id !== id));
  };
  return (
    <div className="userList__container">
      <div className="userList-Title">
        <h3>User List OverView</h3>
      </div>
      <Box sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={userData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
}

export default UserList;
