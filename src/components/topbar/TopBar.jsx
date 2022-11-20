import React from "react";
import "./topbar.css";
import myPictureProfile from "../../assets/IMG_20191219_075626.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper__container">
        <div className="leftbar">
          <span className="logo">Mhthodol</span>
        </div>
        <div className="right__side-container">
          <div className="notification__container">
            <NotificationsNoneIcon className="notification__icon" />
            <div className="notificationNumber">2</div>
          </div>
          <div className="theEarthIcon__container">
            <LanguageIcon className="language__icon" />
          </div>
          <div className="image__profile-container">
            <img src={myPictureProfile} alt="my pictureProfile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
