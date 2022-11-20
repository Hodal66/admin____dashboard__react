import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userInfo } from "../../UserData.js";
import WidgetSm from "../../components/widgets/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgets/widgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
      {/* <h1>This is the home page</h1> */}
      <FeaturedInfo />
      <Chart
        data={userInfo}
        title="User Statistics"
        grid
        showActiveUser
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
