import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sideListItem  active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sideListItem ">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sideListItem ">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sideListItem ">
              <ManageAccountsIcon className="sidebarIcon" />
              User
            </li>
            <li className="sideListItem ">
              <ProductionQuantityLimitsIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sideListItem ">
              <PaidOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sideListItem ">
              <BarChartOutlinedIcon className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sideListItem ">
              <MailLockOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sideListItem ">
              <DynamicFeedOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sideListItem ">
              <MarkChatUnreadOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Setting</h3>
          <ul className="sidebarList">
            <li className="sideListItem ">
              <ManageHistoryOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sideListItem ">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sideListItem ">
              <NewReleasesIcon className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
