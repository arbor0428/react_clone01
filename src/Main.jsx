import './reset.css';
import './style.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Main() {
    useEffect(() => {
        AOS.init();
      });
    return (
        <div>

            <div className="cont1">
                <div className="v_center">
                    <div className="visual dp_f dp_c">
                        <div className="bg" style= {{ backgroundImage : "url('../images/slide01.png')"}}></div>
                        <div className="v_txtBox">
                            <div className="v_txt_main c_w">
                                <p className="bold2" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">분양광고<span className="light">의 모든 것</span></p>
                                <p className="bold2" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="500">채움이 多 채웁니다.</p>
                            </div>
                            <p className="v_txt_sub c_w" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="900">
                                25여년 간의 분양광고 업력을 바탕으로 고퀄리티의 전문 인력이<br />
                                아파트, 오피스텔, 상가, 지식산업센터, 타운하우스 등 고객사의 성공분양을 위해 함께합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cont2">
                <div className="c_center">
                    <p className="cont2_intro bold2" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
                        광고기획부터 개발계획도, 건축CG, 각종 홍보물 디자인 및 제작까지<br />
                        업계 유일의 <span className="c_orange bold2">‘One Stop System’</span>을 갖추고 있는
                    </p>
                    <p className="cont2_tit c_orange bold2" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="300">주식회사 채움</p>
                    <p className="cont_det c_gry01" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="500">차별화된 서비스와 자체 전문인력으로 고퀄리티 사양의 홍보물 제작하여 광고만족도를 제고합니다.</p>
                    <ul className="icon_wrap dp_sb dp_c" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="700">
                        <li className="dp_f dp_fc dp_c">
                            <img src="./images/red_icon01.png" alt="" />
                            <p className="icon_tit bold2 c_orange">Supermacy</p>
                            <p className="icon_det c_gry01">
                                최고의 선도기업 추구
                                <br />
                                원스톱 시스템 구축
                                <br />
                                자체 전문인력 활용
                            </p>
                        </li>
                        <li className="dp_f dp_fc dp_c">
                            <img src="./images/red_icon02.png" alt="" />
                            <p className="icon_tit bold2 c_orange">Satisfaction</p>
                            <p className="icon_det c_gry01">
                                광고 만족도 극대화
                                <br />
                                차별화된 서비스
                                <br />
                                최상의 퀄리티
                            </p>
                        </li>
                        <li className="dp_f dp_fc dp_c">
                            <img src="./images/red_icon03.png" alt="" />
                            <p className="icon_tit bold2 c_orange">Value</p>
                            <p className="icon_det c_gry01">
                                올바른 상품가치 실현
                                <br />
                                거품가격 지양
                                <br />
                                기업이윤의 사회환원
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="cont3 blk">
                <div className="c_center c_w">
                    <h3 className="cont_tit" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">BUSINESS AREA</h3>
                    <p className="cont_det" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="300">기획부터 납품까지 한번에 해결하는 온·오프라인 ONE-STOP 서비스를 제공합니다.</p>
                    <ul className="busi_icon_wrap dp_sb dp_c" >
                        <li data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="500">
                            <a className="dp_f dp_fc dp_c dp_cc" href="" title="개발계획도 및 위성지도 제작">
                                <img src="./images/area_icon01.png" alt="" />
                                <p>
                                    개발계획도 및<br />
                                    위성지도 제작
                                </p>
                            </a>
                        </li>
                        <li data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="650">
                            <a className="dp_f dp_fc dp_c dp_cc" href="" title="광고 CG">
                                <img src="./images/area_icon02.png" alt="" />
                                <p>
                                    광고 CG
                                </p>
                            </a>
                        </li>
                        <li data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="800">
                            <a className="dp_f dp_fc dp_c dp_cc" href="" title="광고기획디자인">
                                <img src="./images/area_icon03.png" alt="" />
                                <p>
                                    광고기획디자인
                                </p>
                            </a>
                        </li>
                        <li data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="950">
                            <a className="dp_f dp_fc dp_c dp_cc" href="" title="광고물 제작">
                                <img src="./images/area_icon04.png" alt="" />
                                <p>
                                    광고물 제작
                                </p>
                            </a>
                        </li>
                        <li data-aos="flip-left" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="1100">
                            <a className="dp_f dp_fc dp_c dp_cc" href="" title="온라인 광고">
                                <img src="./images/area_icon05.png" alt="" />
                                <p>
                                    온라인 광고
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="cont4">
                <div className="c_center">
                    <h3 className="cont_tit" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">PORTFOLIO</h3>
                    <div className="portfolio_wrap dp_sb dp_c dp_wrap" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="300">
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style= {{ backgroundImage : "url('../images/portfolio01.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)광명 구름산 에코시티(조감도)광명 구름산 에코시티(조감도)광명 구름산 에코시티(조감도)광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style={{ backgroundImage : "url('../images/portfolio02.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style={{ backgroundImage : "url('../images/portfolio03.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style={{ backgroundImage : "url('../images/portfolio04.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>	
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style={{ backgroundImage : "url('../images/portfolio05.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="portfolio_box">
                            <a className="portfolio_sum" href="" title="게시글1" style={{ backgroundImage : "url('../images/portfolio06.png')"}}></a>
                            <div className="port_black_hover">
                                <div className="hover_center dp_f dp_fc dp_end02">
                                    <p className="c_w bold2 dotdot">광명 구름산 에코시티(조감도)</p>
                                    <img src="./images/arrow_wht.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="more_btn dp_sb dp_c" href="" title="더 많은 컨텐츠 보기">
                        <span>더 많은 컨텐츠 보기</span>
                        <img src="./images/arrow.svg" alt="" />
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Main;
