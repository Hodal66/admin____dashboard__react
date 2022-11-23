import {
  CalendarTodayOutlined,
  LocationSearching,
  MailOutline,
  PermIdentityRounded,
  PhoneAndroid,
  PublishRounded,
} from "@mui/icons-material";
import React from "react";
import "./user.css";
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.pinimg.com/736x/a0/66/6b/a0666b22886130e1896ab961ecf609cc.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTitle">
              <span className="userShowUserName">Muheto Hodal</span>
              <span className="userShowUserTitle">SoftWare Engenier</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitleDetails">User Detail</span>
            <div className="userShowInfo">
              <PermIdentityRounded className="userShowIcon" />
              <span className="userShowUserTitle">MHT Hodal</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayOutlined className="userShowIcon" />
              <span className="userShowUserTitle">12.12.2022</span>
            </div>
            <div className="userShowContactDetails">Contact Details</div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowUserTitle">+1 200 304</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowUserTitle">mhthodol@gmail.com</span>
            </div>
          </div>
          <div className="userShowInfo">
            <LocationSearching className="userShowIcon" />
            <span className="userShowUserTitle">RWANDA | Kigali</span>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User Updates</label>
                <input
                  type="text"
                  placeholder="Muheto Hodal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="MHT Hodal"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="mhthodol@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Date</label>
                <input
                  type="text"
                  placeholder="12.12.2022"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 200 304"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="RWANDA | Kigali"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImage"
                  src="https://i.pinimg.com/736x/a0/66/6b/a0666b22886130e1896ab961ecf609cc.jpg"
                  alt=""
                />
                <div className="userUploadInput">
                  <label htmlFor="fileUpload">
                    <PublishRounded className="userUploadIcon" />
                  </label>
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
