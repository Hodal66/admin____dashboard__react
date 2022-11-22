import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import "./app.css";
import Home from "./page/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./page/userLIst/UserList";

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
          {/*<Route path="contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
