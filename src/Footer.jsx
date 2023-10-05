import './reset.css';
import './style.css';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Footer() {
    useEffect(() => {
        AOS.init();
      });
    return (
        <footer>
            <div className="c_center dp_sb dp_c">
                <img className="f_logo" src="./images/f_logo.svg" alt="" />
                <div className="com_info_wrap">
                    <ul className="dp_f dp_c dp_end02 bold c_gry01">
                        <li className="dp_f dp_c">주식회사 채움</li>
                        <li className="dp_f dp_c">대표자 : 테스트</li>
                        <li className="dp_f dp_c">주소 : 경기도 테스트시 테스트1번길 45, 1층 (테스트동)</li>
                    </ul>
                    <ul className="dp_f dp_c dp_end02 bold c_gry01">
                        <li className="dp_f dp_c">사업자등록번호 : 000-0000-0000</li>
                        <li className="dp_f dp_c">대표전화 : 0000-0000</li>
                        <li className="dp_f dp_c">이메일 : hannah1155@naver.com </li>
                    </ul>
                    <p className="copyright c_gry02 bold">COPYRIGHT © 2023 CHAEUM. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>  
    );
}

export default Footer;
