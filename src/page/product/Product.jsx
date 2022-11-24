import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productInfo } from "../../UserData";
import { Publish } from "@mui/icons-material";
function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Edit Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productInfo} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq_IcMmsiqp65ISbUbRiv_30s7xtnJLknwQ&usqp=CAU"
              alt=""
              className="productInfoImage"
            />
            <div className="productName">Apple airPods</div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id : </span>
              <span className="productInfoValue">123 </span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales: </span>
              <span className="productInfoValue">54321</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active : </span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock </span>
              <span className="productInfoValue">No </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Is Active</label>
            <select name="isActive" id="idActive">
              <option value="yes">Yes</option>
              <option value="no" selected>
                No
              </option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrq_IcMmsiqp65ISbUbRiv_30s7xtnJLknwQ&usqp=CAU"
                alt=""
                className="productformImg"
              />
              <label for="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
