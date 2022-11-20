import React from "react";
import "./widgetSm.css";
import WidgetSmImage from "../../../assets/IMG_20191219_075626.jpg";
import VisibilityIcon from "@mui/icons-material/Visibility";
function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Member</span>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={WidgetSmImage}
            alt="related pictures"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allan Kelly</span>
            <span className="widgetSmUsrTitle">Software_Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={WidgetSmImage}
            alt="related pictures"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allan Kelly</span>
            <span className="widgetSmUsrTitle">Software_Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={WidgetSmImage}
            alt="related pictures"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allan Kelly</span>
            <span className="widgetSmUsrTitle">Software_Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={WidgetSmImage}
            alt="related pictures"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allan Kelly</span>
            <span className="widgetSmUsrTitle">Software_Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src={WidgetSmImage}
            alt="related pictures"
            className="widgetSmImage"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Allan Kelly</span>
            <span className="widgetSmUsrTitle">Software_Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
