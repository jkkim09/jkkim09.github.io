import { useEffect, useState } from 'react'
import classNames from 'classnames'

import SKILLS from '../components/main/skills'
import INDEX from '../components/main/index'
import EXPERIENCE from '../components/main/experience'
import CHART from '../components/main/chart'

import MainStyle from '../styles/scss/Main.module.scss'


const Main = () => {
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
    })

    return (
        <div className={classNames([MainStyle.main])}>
            <div className={MainStyle.main__header}>
                <div className={MainStyle.main__header__1}>
                    <div className={classNames([MainStyle.main__header__low,
                    MainStyle.main__header__line])}></div>
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
            <INDEX/>
            <SKILLS/>
            { load && <EXPERIENCE/> }
            {/* <CHART/> */}
        </div>
    )
}

export default Main