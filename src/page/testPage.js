import '../styles/scss/myPage.scss'
import MyImg from "../images/kakao.jpeg";
import HtmlImg from "../images/html.png";
import CssImg from "../images/css.png";
import JsImg from "../images/js.png";
import VueImg from "../images/vue.png";
import ReactImg from "../images/react.png";
import FlutterImg from "../images/flutter.png";
import SpringImg from "../images/spring.png";
import MysqlImg from "../images/mysql.png";
import DockerImg from "../images/docker.png";
import K8sImg from "../images/k8s.png";
import AwsImg from "../images/aws.png";
import BicycleImg from "../images/bicycle.png";
import SpoImg from "../images/spo.png";
import MovImg from "../images/mov.png";
import SwimmingImg from "../images/swimming.png";


const TestPage = () => {
    return <div className='myPage'>
        <section className='myInfo'>
            <div className='myInfo__profile'>
                <div className='myInfo__profile__Image'>
                    {/* <img src={DevImg} alt=''/> */}
                </div>
                <div className='myInfo__profile__jk'>
                    <h2 className='first'>KIM</h2>
                    <h2 className='second'>JA KYOUNG</h2>
                    <h2 className='job'>Developer</h2>
                </div>
                <div className='listArea m-t-50'>
                    <h1 className='listArea-title'>
                        <span>///</span>{' '}CONTACT
                    </h1>
                    <div className='listArea-contact'>
                        <div>
                            <div className='title'>Phone</div>
                            <div>010-9915-2078</div>
                        </div>
                        <div>
                            <div className='title'>Email</div>
                            <div>wkrud203@gmail.com</div>
                        </div>
                        <div>
                            <div className='title'>Website / SNS</div>
                            <div>https://jkkim09.github.io</div>
                            <div>https://jktech.tistory.com/</div>
                        </div>
                        <div>
                            <div className='title'>Address</div>
                            <div>서울특별시 송파구</div>
                        </div>
                    </div>
                </div>
                <div className='listArea m-t-50'>
                    <h1 className='listArea-title'>
                        <span>///</span>{' '}hobby
                    </h1>
                    <div className='listArea-list'>
                        <div className='items'>
                                <div className='item'>
                                    <img src={BicycleImg} alt=''/>
                                    <span>자전거</span>
                                </div>
                                <div className='item'>
                                    <img src={SpoImg} alt=''/>
                                    <span>웨이트</span>
                                </div>
                                <div className='item'>
                                    <img src={MovImg} alt=''/>
                                    <span>영화</span>
                                </div>
                                <div className='item'>
                                    <img src={SwimmingImg} alt=''/>
                                    <span>수영</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='listArea m-t-50'>
                    <h1 className='listArea-title'>
                        <span>///</span>{' '}SKILLS
                    </h1>
                    <div className='listArea-list'>
                        <h1 className='subTitle'>
                            -FRONT END-
                        </h1>
                        <div className='items'>
                            <div className='item'>
                                <img src={HtmlImg} alt=''/>
                                <span>HTML</span>
                            </div>
                            <div className='item'>
                                <img src={CssImg} alt=''/>
                                <span>CSS</span>
                            </div>
                            <div className='item'>
                                <img src={JsImg} alt=''/>
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className='item'>
                                <img src={VueImg} alt=''/>
                                <span>VUEJS</span>
                            </div>
                            <div className='item'>
                                <img src={ReactImg} alt=''/>
                                <span>REACT</span>
                            </div>
                            <div className='item'>
                                <img src={FlutterImg} alt=''/>
                                <span>FLUTTER</span>
                            </div>
                        </div>
                    </div>
                    <div className='listArea-list m-t-35'>
                        <h1 className='subTitle'>
                            -BACK END-
                        </h1>
                        <div className='items'>
                            <div className='item'>
                                <img src={SpringImg} alt=''/>
                                <span>Spring Boot</span>
                            </div>
                        </div>
                    </div>
                    <div className='listArea-list m-t-35'>
                        <h1 className='subTitle'>
                            -DATABASE-
                        </h1>
                        <div className='items'>
                            <div className='item'>
                                <img src={MysqlImg} alt=''/>
                                <span>MYSQL</span>
                            </div>
                        </div>
                    </div>
                    <div className='listArea-list m-t-35'>
                        <h1 className='subTitle'>
                            -ETC-
                        </h1>
                        <div className='items'>
                            <div className='item'>
                                <img src={DockerImg} alt=''/>
                                <span>DOCKER</span>
                            </div>
                            <div className='item'>
                                <img src={K8sImg} alt=''/>
                                <span>K8S</span>
                            </div>
                            <div className='item'>
                                <img src={AwsImg} alt=''/>
                                <span>AWS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='projectInfo'>
            <div>
                <h1 className='listArea-title'>
                    <span>///</span>{' '}자기소개
                </h1>
                <div>
                    안녕하세요.
                </div>
            </div>
            <div>
                <h1 className='listArea-title m-t-50'>
                    <span>///</span>{' '}학력사항
                </h1>
                <div className='history'>
                    <div>
                        <span>2016.07<br/>~<br/>2017.01</span>
                        <span></span>
                        <div>
                            KOSTA 개발자 과정 이수
                            <span>최우수상</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='listArea-title m-t-50'>
                    <span>///</span>{' '}경력<span>2017.02 ~ (7년차)</span>
                </h1>
            </div>
            <div>
                <h1 className='listArea-title m-t-50'>
                    <span>///</span>{' '}프로젝트 경험
                </h1>
            </div>
        </section>
    </div>
}

export default TestPage