import classNames from 'classnames'

import { Swiper, SwiperSlide } from "swiper/react";



import SwiperCore, {
    EffectFlip,Pagination,Navigation
} from 'swiper/core';
  
import MainStyle from '../../styles/scss/Main.module.scss'
import SkillsStyle from '../../styles/scss/Skills.module.scss'
import ExStyle from '../../styles/scss/Experience.module.scss'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

const Experience = () => {
    SwiperCore.use([EffectFlip,Pagination,Navigation]);

    return (
        <div className={classNames([SkillsStyle.skills__2])}>
            <div className={classNames([MainStyle.main__body])}>
                <table className={MainStyle.table}>
                    <tbody>
                        <tr>
                            <td>
                            <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__1}>
                                        <div className={classNames([ExStyle.low__title])}>운동 관련 서피스 Front-End, BackOffice</div>
                                        <div className={classNames([ExStyle.low__title__info])}>Web Service Platform</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
											<div>React.js</div>
											<div>Next.js</div>
                                            <div>redux, redux-saga</div>
                                            <div>typescript</div>
                                            <div>SCSS</div>
											<div>Docker</div>
											<div>AWS(CloudFront)</div>
                                            <div>HTML5</div>
											<div>Javascript</div>
											<div>CSS</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
											<li>- Next.js(React.js) 환경의 Web 서비스</li>
                                            <li>- Next.js(React.js) 환경의 Web BackOffice</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__2}>
                                        <div className={classNames([ExStyle.low__title])}>ONLINE VIDEO PLATFROM HTML5 PLAYER, VIDEO GATEWAY SERVICE</div>
                                        <div className={classNames([ExStyle.low__title__info])}>HTML Video Player 개발, Video GW 개발(back-end)</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
											<div>PHP(CI)</div>
											<div>WebPack</div>
											<div>Docker</div>
											<div>AWS(CloudFront)</div>
                                            <div>HTML5</div>
											<div>Javascript</div>
											<div>CSS</div>
											<div>VueJs</div>
											<div>Video.js</div>
											<div>Dash.js</div>
											<div>Hls.js</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
											<li>- PHP를 이용하여 VOD 컨텐츠정보 및 기타 옵션 정보를 조회하여 Player에 전달하는 VG(Video Gateway)기능 개발및 유지보수</li>
                                            <li>- VG에서 보낸 정보를 바탕으로 영상을 Play하는 HTML5 Player기능 개발및 유지보수</li>
											<li>- HLS, DASH영상 재생 기능 개발</li>
											<li>- CloudFront를 통한 영상 재생 기능 개발</li>
											<li>- Player 스킨 커스텀 Page개발</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__1}>
                                        <div className={classNames([ExStyle.low__title])}>SHOPPINGNT POINT ORDER PAGE</div>
                                        <div className={classNames([ExStyle.low__title__info])}>쇼핑엔티 POINT 상품 주문 시스템 Front-End, Back-End 개발</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
                                            <div>Java(Spring)</div>
                                            <div>Mysql</div>
                                            <div>VueJs</div>
                                            <div>WebPack</div>
                                            <div>HTML5</div>
                                            <div>Javascript</div>
                                            <div>CSS</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
                                            <li>모든 카드사의 포인트를 TVHUB포인트로 SHOPPINGNT 상품을 옵셕 수량 등 선택 및 결제 Front-End Page 신규 개발</li>
                                            <li>Mobile 환경에 맞게 UI 개발및 크로스 브라우징대응</li>
                                            <li>기타 기능 개발 및 유지보수</li>
                                            <li>유지보수 및 성능을 고료하여 VueJs를 이용하여 Page개발</li>
                                            <li>WebPack 을 이용한 Build환경 구축</li>
                                            <li>Java(Spring) 포인트 전환 및 결제 Back-End개발</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__2}>
                                        <div className={classNames([ExStyle.low__title])}>TVHUB CARD POINT CONVERSION PAGE</div>
                                        <div className={classNames([ExStyle.low__title__info])}>카드포인트를 tvhub 포인트로 통합해주는 페이지 기능 및 유지 Front-End, Back-End 개발</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
											<div>Java(Spring)</div>
											<div>Mysql</div>
											<div>HTML5</div>
                                            <div>Javascript</div>
                                            <div>Jquery</div>
                                            <div>CSS</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
                                            <li>모든 카드사의 포인트를 TVHUB포인트로 전환하여 사용 할 수있게 해주는 Front-End Page 개발</li>
                                            <li>Mobile 환경에 맞게 UI 개발및 크로스 브라우징대응</li>
                                            <li>기타 기능 개발 및 유지보수</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__1}>
                                        <div className={classNames([ExStyle.low__title])}>U+ VIDEO PORTAL POINT CONVERSION PAGE</div>
                                        <div className={classNames([ExStyle.low__title__info])}>LG비디오 포탈 APP 포인트 전환 페이지 Front-End 개발</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
											<div>Java(Spring)</div>
                                            <div>Mysql</div>
                                            <div>HTML5</div>
                                            <div>Javascript</div>
                                            <div>Jquery</div>
                                            <div>CSS</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
                                            <li>모든 카드사의 포인트를 TVHUB포인트로 전환하여 사용 할 수있게 해주는 U+ VIDEO PORTAL APP 전용페이지 Front-End Page 신규 개발</li>
                                            <li>Mobile 환경에 맞게 UI 개발및 크로스 브라우징대응</li>
                                            <li>기타 기능 개발 및 유지보수</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={ExStyle.itemArea__2}>
                                        <div className={classNames([ExStyle.low__title])}>KT OLLEH TV MOBILE POINT CONVERSION PAGE</div>
                                        <div className={classNames([ExStyle.low__title__info])}>올레티비 모바일 APP 포인트 전환 페이지 Front-End 개발</div>
                                        <div className={classNames([ExStyle.item__list__area])}>
											<div>Java(Spring)</div>
                                            <div>Mysql</div>
                                            <div>HTML5</div>
                                            <div>Javascript</div>
                                            <div>CSS</div>
										</div>
                                        <ul className={classNames([ExStyle.ul__area])}>
                                            <li>모든 카드사의 포인트를 TVHUB포인트로 전환하여 사용 할 수있게 해주는 KT OLLEH TV MOBILE APP 전용페이지 Front-End Page 신규 개발</li>
                                            <li>Mobile 환경에 맞게 UI 개발및 크로스 브라우징대응</li>
                                            <li>기타 기능 개발 및 유지보수</li>
										</ul>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={MainStyle.main__bottom}>
            </div>
        </div>
    )
}

export default Experience
