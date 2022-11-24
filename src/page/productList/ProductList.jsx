import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import PreviewIcon from "@mui/icons-material/Preview";
import { productRows } from "../../UserData";
import { Link } from "react-router-dom";
import "./productList.css";
function ProductList() {
  const [product, setProduct] = useState(productRows);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      editable: true,
      renderCell: (params) => {
        //Here you can create a function inside the cell that can return any things you want
        return (
          <div className="productListUser">
            <img className="userImage" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    // {
    //   field: "avatar",
    //   headerName: "Avatar",
    //   width: 200,
    //   editable: true,
    // },
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
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      action: ["update", <DeleteSweepIcon />],
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log("This is the action : ", params.row);
        return (
          <div className="action__container">
            <button className="actionButton viewRecord">
              <PreviewIcon />
            </button>

            <Link to={"/product-edit/" + params.row.id}>
              <button className="actionButton modify">
                {params.row.action[0]}
              </button>
            </Link>
            {/* <button
              className="actionButton danger "
              onClick={() => handleDeleteProduct(action.row.id)}
            >
              {action.row.action[1]}
            </button> */}
            <DeleteSweepIcon
              className="actionButton danger"
              onClick={() => handleDeleteProduct(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  const handleDeleteProduct = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  return (
    <div className="product-list">
      <div className="Product--list_container"> Product List</div>
      <div>
        <Box sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={product}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    </div>
  );
}

export default ProductList;
