import classNames from 'classnames'

import MainStyle from '../../styles/scss/Main.module.scss'
import SkillsStyle from '../../styles/scss/Skills.module.scss'

const Skills = () => {
    return (
        <div className={classNames([SkillsStyle.skills])}>
            <div className={MainStyle.main__header}>
                <div className={MainStyle.main__header__1}>
                    <div className={classNames([MainStyle.main__header__low,
                    MainStyle.main__header__line__2])}></div>
                    <div className={MainStyle.main__header__low}></div>
                </div>
                <div className={MainStyle.main__header__3}>KJK</div>
            </div>
            <div className={classNames([MainStyle.main__body, SkillsStyle.skills__back])}>
                <div className={SkillsStyle.skiils__body}>
                    <div>
                        <table className={MainStyle.table}>
                            <tbody>
                                <tr>
                                    <td>
                                        <h1 className={SkillsStyle.title}>SKILLS</h1>
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
                                            <div className={classNames([SkillsStyle.skills__info, SkillsStyle.skills__low__title])}>#BACK-END</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- Spring Boot</div>
                                            <div className={classNames([SkillsStyle.skills__info, SkillsStyle.skills__low__title])}>#FRONT-END</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- Javascript</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- Vue.js</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- React.js</div>
                                            <div className={classNames([SkillsStyle.skills__info, SkillsStyle.skills__low__title])}>#DATABASE</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- Mysql</div>
                                            <div className={classNames([SkillsStyle.skills__info, SkillsStyle.skills__low__title])}>#DevOps</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- Docker</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- K8S</div>
                                            <div className={classNames([SkillsStyle.skills__info])}>- AWS</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={MainStyle.main__bottom}>
            </div>
        </div>
    )
}

export default Skills
