import '../styles/scss/myPage.scss'
import MyImg from "../images/kakao.jpeg";

const TestPage = () => {
    return <div className='myPage'>
        <section className='myInfo'>
            <div className='myInfo__profile'>
                <div className='myInfo__profile__Image'>
                    <img src={MyImg}/>
                </div>
            </div>
        </section>
        <section className='projectInfo'>
            <div></div>
        </section>
    </div>
}

export default TestPage