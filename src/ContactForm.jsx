import './reset.css';
import './style.css';
import React, { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({name: '', email: '', placekind: '', q_content: ''});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name] : value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2))
    };
    return (
        <div className="cont5">
            <div className="c_center">
                <h3 className="cont_tit">CONTACT</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input_row dp_sb dp_c dp_wrap">
                        <div className="inputWrap wid50">
                            <label htmlFor="name">성함<span className="c_orange">*</span></label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={form.name} 
                                onChange={handleChange} 
                                placeholder="성함을 입력해 주세요." 
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="call">연락처<span className="c_orange">*</span></label>
                            <input 
                                type="text" 
                                id="call" 
                                name="call" 
                                value={form.call} 
                                onChange={handleChange} 
                                placeholder="연락처를 입력해 주세요." 
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="email">이메일<span className="c_orange">*</span></label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={form.email} 
                                onChange={handleChange} 
                                placeholder="이메일을 입력해 주세요." 
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="placekind">현장종류<span className="c_orange">*</span></label>
                            <select name="placekind" id="placekind">
                                <option value="">선택</option>
                            </select>
                        </div>
                        <div className="inputWrap">
                            <label htmlFor="q_content">문의내용<span className="c_orange">*</span></label>
                            <input 
                                type="text" 
                                id="q_content"
                                name="q_content" 
                                value={form.q_content} 
                                onChange={handleChange} 
                                placeholder="문의 내용을 입력해 주세요." 
                            />
                        </div>
                        <div className="agree_info">
                            <p className="first">개인정보 수집·이용에 대한 안내 (필수 수집·이용 항목)</p>
                            <p className="second c_gry01">
                                문의주신 내용의 답변을 위하여 고객님의 개인정보를 수집합니다. 개인정보 수집에 동의하신 분에 한하여 문의 접수가 가능합니다.<br />
                                수집하는 개인정보 항목 : 성함 / 연락처 / 이메일
                            </p>
                        </div>
                        <div className="inputWrap dp_f dp_c radio_input">
                            <input className="dp_f dp_c" type="radio" id="agreechk" name="" value="" />
                            <label htmlFor="agreechk">동의합니다.</label>
                        </div>
                    </div>

                    <button type="submit" className="more_btn dp_sb dp_c">
                        <span>문의글 남기기</span>
                        <img src="./images/arrow.svg" alt="" />
                    </button>
                </form>
            </div>
        </div>

    );
}
    