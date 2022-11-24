import React from "react";
import "./newProduc.css";
function NewProduct() {
  return (
    <div className="newProduct">
      <h2>Create New Product</h2>
      <div className="newProductContainer">
        <label> Image</label>
        <div className="productUploadImage">
          <input type="file" name="fileUpload" id="fileUpload" />
        </div>
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
            <button className="productButton">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
