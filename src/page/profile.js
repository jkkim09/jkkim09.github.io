import classNames from 'classnames'
import INDEX from '../components/main/index'

import ProfileStyle from '../styles/scss/Profile.module.scss'

import myProfile1 from '../images/myProfile1.png'
import myProfile2 from '../images/myProfile2.png'
import myProfile3 from '../images/myProfile3.png'

const Profile = () => {
    return (
        <div className={classNames([ProfileStyle.main])}>
            <INDEX/>
            <div className={classNames([ProfileStyle.imgContainer])}>
                <img src={myProfile1}/>
                <img src={myProfile2}/>
                <img src={myProfile3}/>
            </div>
        </div>
    )
}

export default Profile;