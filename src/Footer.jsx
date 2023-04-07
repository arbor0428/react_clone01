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
                        <li className="dp_f dp_c">대표자 : 신현준</li>
                        <li className="dp_f dp_c">주소 : 경기도 오산시 수청로8번길 45, 2층 (수청동)</li>
                    </ul>
                    <ul className="dp_f dp_c dp_end02 bold c_gry01">
                        <li className="dp_f dp_c">사업자등록번호 : 829-88-00132</li>
                        <li className="dp_f dp_c">대표전화 : 1599-7807</li>
                        <li className="dp_f dp_c">이메일 : shk1123kr@naver.com </li>
                    </ul>
                    <p className="copyright c_gry02 bold">COPYRIGHT © 2023 CHAEUM. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>  
    );
}

export default Footer;
