import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import "./app.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./page/userLIst/UserList";
import User from "./page/user/User";
import NewUser from "./page/newUser/NewUser";
import ProductList from "./page/productList/ProductList";
import Product from "./page/product/Product";
import NewProduct from "./page/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes>
          {/* <Route path="/" element={<Layout />}/> */}
          <Route path="/" exact element={<Home />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/users" element={<UserList />} />
          {/* THIS IS HOW WE UPDATE A USER*/}
          <Route path="/user-edit/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-edit/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />

          {/*<Route path="contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
