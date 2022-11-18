import React from "react";
import "./topbar.css";
import Button from "@material-ui/core/Button";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function TopBar() {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper__container">
        <div className="leftbar">
          Left
          <span className="logo">Mhthodol</span>
          <Button variant="contained" color="primary" size="large">
            GeeksforGeeks
          </Button>
        </div>
        <div className="rigthbar">
          Right
          <NotificationsNoneIcon />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
