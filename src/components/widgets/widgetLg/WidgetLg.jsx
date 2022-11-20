import React from "react";
import "./widgetLg.css";
import ImageWidget from "../../../assets/IMG_20191219_075626.jpg";
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ImageWidget}
              alt="example_image"
              className="ImageWidget"
            />
            <span className="widgetLgName">Suzan Carol</span>
          </td>
          <td className="widgetLgData">2 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgData">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ImageWidget}
              alt="example_image"
              className="ImageWidget"
            />
            <span className="widgetLgName">Suzan Carol</span>
          </td>
          <td className="widgetLgData">2 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgData">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ImageWidget}
              alt="example_image"
              className="ImageWidget"
            />
            <span className="widgetLgName">Suzan Carol</span>
          </td>
          <td className="widgetLgData">2 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgData">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ImageWidget}
              alt="example_image"
              className="ImageWidget"
            />
            <span className="widgetLgName">Suzan Carol</span>
          </td>
          <td className="widgetLgData">2 Jan 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgData">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
