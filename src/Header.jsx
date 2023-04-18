import './reset.css';
import './style.css';
import React, { useState } from "react";

function Header() {

    // 상태(state)를 사용하여 메뉴 항목의 활성화 여부와 하위 메뉴의 열림/닫힘 상태를 관리합니다.
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMNavOpen, setIsMNavOpen] = useState(false);
    

    // onMouseEnter 이벤트 핸들러와 onMouseLeave 이벤트 핸들러를 사용하여 이벤트를 처리합니다.
    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    function handleMNavClick(e) {
        e.preventDefault();
    
        setIsMNavOpen(prevState => !prevState);
    }

    return (
        <header className={`header ${isMNavOpen ? 'm-nav-open' : ''}`}>
            <div className="h_center dp_sb dp_c">
                <h1 className="logo"><a href="" title="로고"><img src="./images/logo.svg" alt="로고"/></a></h1>
                <ul className="gnb urbanist dp_f dp_c">
                    <li 
                        className={activeIndex === 0 ? "dp_f dp_c on" : "dp_f dp_c"}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}>
                        <a className="bold1 dp_f dp_c" href="" title="COMPANY">COMPANY</a>
                        {activeIndex === 0 && (
                        <ul className="depth2">
                            <li><a className="bold c_gry01" href="" title="CEO message">CEO message</a></li>
                            <li><a className="bold c_gry01" href="" title="Company review">Company review</a></li>
                            <li><a className="bold c_gry01" href="" title="Management">Management</a></li>
                            <li><a className="bold c_gry01" href="" title="Organization">Organization</a></li>
                        </ul>
                        )}
                    </li>
                    <li
                        className={activeIndex === 1 ? "on dp_f dp_c" : "dp_f dp_c"}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}>
                        <a className="bold1 dp_f dp_c" href="" title="SERVICE">SERVICE</a>
                        {activeIndex === 1 && (
                        <ul className="depth2">
                            <li><a className="bold c_gry01" href="" title="On Line">On Line</a></li>
                            <li><a className="bold c_gry01" href="" title="Off Line">Off Line</a></li>
                        </ul>
                        )}
                    </li>
                    <li className="dp_f dp_c"><a className="bold1 dp_f dp_c" href="" title="PORTFOLIO">PORTFOLIO</a></li>
                    <li className="dp_f dp_c"><a className="bold1 dp_f dp_c" href="" title="CONTACT">CONTACT</a></li>
                </ul>
                <div className="btnMNav menu-btn-wrap" onClick={handleMNavClick}>
                    <div className="menu-btn">
                        <span className="line"></span>
                    </div>
                </div>
            </div>    
            <div className="open-nav-wrap" style={{ display: isMNavOpen ? 'block' : 'none' }}>
                <div className="c_center">
                    <ul className="m_gnb">
                        <li className={`${ activeIndex === 0 ? "on" : ""}`}>
                            <a 
                                className="bold1 dp_f dp_c" 
                                title="COMPANY" 
                                onClick={() => handleToggle(0)}
                            >
                                COMPANY
                                <img className="circle" src="./images/toggle.svg" alt="" />
                            </a>
                            <ul className={`m_depth2 ${ activeIndex === 0 ? "is-active" : ""}`}>
                                <li><a href="" title="CEO message">CEO message</a></li>
                                <li><a href="" title="Company review">Company review</a></li>
                                <li><a href="" title="Management">Management</a></li>
                                <li><a href="" title="Organization">Organization</a></li>
                            </ul>
                        </li>
                        <li className={`${ activeIndex === 1 ? "on" : ""}`}>
                            <a 
                                className="bold1 dp_f dp_c" 
                                title="SERVICE" 
                                onClick={() => handleToggle(1)}
                            >
                                SERVICE
                                <img className="circle" src="./images/toggle.svg" alt="" />
                            </a>
                            <ul className={`m_depth2 ${ activeIndex === 1 ? "is-active" : ""}`}>
                                <li><a href="" title="On Line">On Line</a></li>
                                <li><a href="" title="Off Line">Off Line</a></li>
                            </ul>
                        </li>
                        <li><a className="bold1 dp_f dp_c" href="" title="PORTFOLIO">PORTFOLIO</a></li>
                        <li><a className="bold1 dp_f dp_c" href="" title="CONTACT">CONTACT</a></li>
                    </ul>
                </div>
            </div>    
        </header>
    );
}

export default Header;
