import classNames from "classnames";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MyTimeLine from "../../data/timeLine";
import MainStyle from "../../styles/scss/Main.module.scss";
const TimeLine = () => {
  return (
    <div>
      <VerticalTimeline>
        {MyTimeLine.map((item, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className={classNames([
                "vertical-timeline-element--work",
                MainStyle.tileLine__data,
              ])}
              contentStyle={{
                background: item.bodyColor || "#c8c8",
                color: item.textColor || "#ffff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${item.bodyColor || "#c8c8"}`,
              }}
              date={item.date}
              iconStyle={{
                background: item.iconColor || "#407138",
                color: "#fff",
              }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">
                {item.title}
              </h4> */}
              <p>{item.body}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
