/* eslint-disable react/jsx-no-undef */
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
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sideListItem  active">
              <Link to="/">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/analytics">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/sales">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sideListItem ">
              <Link to="/users">
                <ManageAccountsIcon className="sidebarIcon" />
                User
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/products">
                <ProductionQuantityLimitsIcon className="sidebarIcon" />
                Products
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/transactions">
                <PaidOutlinedIcon className="sidebarIcon" />
                Transactions
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/transactions">
                <BarChartOutlinedIcon className="sidebarIcon" />
                Transactions
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sideListItem ">
              <Link to="/mail">
                <MailLockOutlinedIcon className="sidebarIcon" />
                Mail
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/feedback">
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Feedback
              </Link>
            </li>
            <li className="sideListItem ">
              <Link to="/messages">
                <MarkChatUnreadOutlinedIcon className="sidebarIcon" />
                Messages
              </Link>
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
