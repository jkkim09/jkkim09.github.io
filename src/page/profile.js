import classNames from "classnames";
import INDEX from "../components/main/index";
import BottomMenu from "../components/bottomMenu";
import ProfileStyle from "../styles/scss/Profile.module.scss";

import myProfile1 from "../images/myProfile1.png";
import myProfile2 from "../images/myProfile2.png";
import myProfile3 from "../images/myProfile3.png";
import myProfile4 from "../images/myProfile4.png";

const Profile = ({ history }) => {
  return (
    <div className={classNames([ProfileStyle.main])}>
      <INDEX />
      <div className={classNames([ProfileStyle.imgContainer])}>
        <img alt={""} src={myProfile1} />
        <img alt={""} src={myProfile2} />
        <img alt={""} src={myProfile3} />
        <img alt={""} src={myProfile4} />
      </div>
      <BottomMenu history={history} />
    </div>
  );
};

export default Profile;
