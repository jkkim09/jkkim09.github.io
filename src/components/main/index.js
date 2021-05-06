import classNames from 'classnames'

import MainStyle from '../../styles/scss/Main.module.scss'
import SkillsStyle from '../../styles/scss/Skills.module.scss'

const Index = () => {
    return (
        <div className={SkillsStyle.skills}>
            <div className={MainStyle.main__bottom}>
            </div>
            <div className={MainStyle.main__body}>
                <div className={SkillsStyle.skiils__body}>
                    <div>
                        <table className={MainStyle.table}>
                            <tbody>
                                <tr>
                                    <td>
                                        <h1 className={SkillsStyle.title}>INDEX</h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table className={MainStyle.table}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={SkillsStyle.skills__info__area}>
                                            <div className={SkillsStyle.skills__info}>1990.05.23</div>
                                            <div className={SkillsStyle.skills__info}>010-9915-2078</div>
                                            <div className={SkillsStyle.skills__info}>Kakao ID: wkrud203</div>
                                            <div className={SkillsStyle.skills__info}>wkrud203@gmail.com</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            <div className={MainStyle.main__header}>
                <div className={MainStyle.main__header__1}>
                    <div className={classNames([MainStyle.main__header__low,
                    MainStyle.main__header__line])}></div>
                    <div className={MainStyle.main__header__low}></div>
                </div>
                <div className={MainStyle.main__header__2}>KJK</div>
            </div>
        </div>
    )
}

export default Index
