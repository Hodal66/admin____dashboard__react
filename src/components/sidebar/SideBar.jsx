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
            <Link to="/" className="Link">
              <li className="sideListItem  active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/analytics" className="Link">
              <li className="sideListItem ">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to="/sales" className="Link">
              <li className="sideListItem ">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="Link">
              <li className="sideListItem ">
                <ManageAccountsIcon className="sidebarIcon" />
                User
              </li>
            </Link>
            <Link to="/products" className="Link">
              <li className="sideListItem ">
                <ProductionQuantityLimitsIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/transactions" className="Link">
              <li className="sideListItem ">
                <PaidOutlinedIcon className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <Link to="/transactions" className="Link">
              <li className="sideListItem ">
                <BarChartOutlinedIcon className="sidebarIcon" />
                Transactions
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/mail" className="Link">
              <li className="sideListItem ">
                <MailLockOutlinedIcon className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link to="/feedback" className="Link">
              <li className="sideListItem ">
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Feedback
              </li>
            </Link>
            <Link to="/messages" className="Link">
              <li className="sideListItem ">
                <MarkChatUnreadOutlinedIcon className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Setting</h3>
          <ul className="sidebarList">
            <Link to="/manage" className="Link">
              <li className="sideListItem ">
                <ManageHistoryOutlinedIcon className="sidebarIcon" />
                Manage
              </li>
            </Link>
            <Link to="/analytics" className="Link">
              <li className="sideListItem ">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link to="/report" className="Link">
              <li className="sideListItem ">
                <NewReleasesIcon className="sidebarIcon" />
                Report
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
