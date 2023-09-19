import { useEffect, useState } from "react";
import classNames from "classnames";

import SKILLS from "../components/main/skills";
import INDEX from "../components/main/index";
import EXPERIENCE from "../components/main/experience";
import BottomMenu from "../components/bottomMenu";

import MainStyle from "../styles/scss/Main.module.scss";
import TimeLine from "../components/main/timeLine";

const Main = ({ history }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div className={classNames([MainStyle.main])}>
      <div className={MainStyle.main__header}>
        <div className={MainStyle.main__header__1}>
          <div
            className={classNames([
              MainStyle.main__header__low,
              MainStyle.main__header__line,
            ])}
          ></div>
          <div className={MainStyle.main__header__low}></div>
        </div>
        <div className={MainStyle.main__header__2}>KJK</div>
      </div>
      <div className={MainStyle.main__body}>
        <table className={MainStyle.table}>
          <tbody>
            <tr>
              <td>
                <h1 className={MainStyle.main__body__title}>DEVELOPER</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={MainStyle.main__bottom}>
        <div className={MainStyle.main__bottom__low}>
          <h1 className={MainStyle.main__bottom__title}>
            Email | wkrud203@gmail.com
          </h1>
        </div>
      </div>
      <INDEX />
      <SKILLS />
      {load && <EXPERIENCE />}
      <TimeLine />
      <div
        style={{
          position: "absolute",
          color: "#ffffff",
          top: "10px",
          left: "10px",
          zIndex: 100
        }}
      >
        <a href="https://hits.seeyoufarm.com">
          <img
            style={{
              border: "1px solid #ffffff",
              borderRadius: "7px",
            }}
            alt={""}
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjkkim09.github.io&count_bg=%23929292&title_bg=%23000000&icon=influxdb.svg&icon_color=%23FF8888&title=%EB%B0%A9%EB%AC%B8%EC%9E%90+%EC%88%98&edge_flat=false"
          />
        </a>
      </div>
      <BottomMenu history={history} />
    </div>
  );
};

export default Main;
