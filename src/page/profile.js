import classNames from 'classnames'
import INDEX from '../components/main/index'
import BottomMenu from '../components/bottomMenu'
import ProfileStyle from '../styles/scss/Profile.module.scss'

import myProfile1 from '../images/myProfile1.png'
import myProfile2 from '../images/myProfile2.png'
import myProfile3 from '../images/myProfile3.png'
import myProfile4 from '../images/myProfile4.png'

const Profile = ({history}) => {
    return (
        <div className={classNames([ProfileStyle.main])}>
            <INDEX/>
            <div className={classNames([ProfileStyle.imgContainer])}>
                <img src={myProfile1}/>
                <img src={myProfile2}/>
                <img src={myProfile3}/>
                <img src={myProfile4}/>
            </div>
            <BottomMenu history={history}/>
        </div>
    )
}

export default Profile;