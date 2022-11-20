import React from "react";
import "./featureInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <nav className="featuredTitle">Revenue</nav>
        <div className="featuredMoneyContainer">
          <nav className="featuredMoney">$2,450</nav>
          <nav className="status_of_money">
            -11.22
            <ArrowDownwardIcon className="featured__icon negative" />
          </nav>
        </div>
        <div className="featureInfoSub">Compared to last Month</div>
      </div>

      <div className="featuredItem">
        <nav className="featuredTitle">Sales</nav>
        <div className="featuredMoneyContainer">
          <nav className="featuredMoney">$4,450</nav>
          <nav className="status_of_money">
            + 40.22
            <ArrowUpwardIcon className="featured__icon" />
          </nav>
        </div>
        <div className="featureInfoSub">Compared to last Month</div>
      </div>

      <div className="featuredItem">
        <nav className="featuredTitle">Cost</nav>
        <div className="featuredMoneyContainer">
          <nav className="featuredMoney">$2,250</nav>
          <nav className="status_of_money">
            +2.4
            <ArrowUpwardIcon className="featured__icon" />
          </nav>
        </div>
        <div className="featureInfoSub">Compared to last Month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
