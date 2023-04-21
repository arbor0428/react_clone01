import './reset.css';
import './style.css';
import React, { useState, useRef, useEffect } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', 
        call: '',
        email: '', 
        placekind: '', 
        q_content: '',
        agreechk : false
    });

    const fieldRefs = {
        name: useRef(null),
        call: useRef(null),
        email: useRef(null),
        placekind: useRef(null),
        q_content: useRef(null),
        agreechk: useRef(null)
    };

    useEffect(() => {
        const formDataArray = Object.entries(formData);
        for (const [key, value] of formDataArray) {
        if (value === '') {
            fieldRefs[key].current.focus();
            break;
        }
        }
    }, [formData]);

    const handleChange = (e) => {
        const { id, type, value, checked } = e.target;
        // 체크박스일 경우 value 대신 checked 값을 사용합니다.

        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'radio' ? checked : value
        }));

        if (value === '') {
            fieldRefs[id].current.focus();
        }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        //alert(JSON.stringify(form, null, 2))

        // for (const name in form) {
        //     if (form[name] === '') {
        //         inputRefs.current[name].focus();
        //         break;
        //     } else if (form[placekind] === '') {
        //         selectRefs.current[placekind].focus();
        //         break;
        //     }
        // }

        // Get form data from state
        const name = formData.name;
        const call = formData.call;
        const email = formData.email;
        const placekind = formData.placekind;
        const q_content = formData.q_content;

        // Create new form data object and push to array
        const newFormData = [...formData];
        newFormData.push({ name: 'name', value: name });
        newFormData.push({ name: 'call', value: call });
        newFormData.push({ name: 'email', value: email });
        newFormData.push({ name: 'placekind', value: placekind });
        newFormData.push({ name: 'q_content', value: q_content });
        setFormData(newFormData);

        // Clear form fields
        setFormData({
            name: '',
            call: '',
            email: '',
            placekind: '',
            q_content: '',
        });
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
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="성함을 입력해 주세요." 
                                ref={fieldRefs.name}
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="call">연락처<span className="c_orange">*</span></label>
                            <input 
                                type="text" 
                                id="call" 
                                name="call" 
                                value={formData.call} 
                                onChange={handleChange} 
                                placeholder="연락처를 입력해 주세요." 
                                ref={fieldRefs.call}
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="email">이메일<span className="c_orange">*</span></label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="이메일을 입력해 주세요." 
                                ref={fieldRefs.email}
                            />
                        </div>
                        <div className="inputWrap wid50">
                            <label htmlFor="placekind">현장종류<span className="c_orange">*</span></label>
                            <select 
                                name="placekind" 
                                id="placekind" 
                                value={formData.placekind} 
                                onChange={handleChange} 
                                ref={fieldRefs.placekind}
                            >
                                <option value="">선택</option>
                                <option value="option1">기타</option>
                                <option value="option2">기타</option>
                                <option value="option3">기타</option>
                            </select>
                        </div>
                        <div className="inputWrap">
                            <label htmlFor="q_content">문의내용<span className="c_orange">*</span></label>
                            <input 
                                type="text" 
                                id="q_content"
                                name="q_content" 
                                value={formData.q_content} 
                                onChange={handleChange} 
                                placeholder="문의 내용을 입력해 주세요." 
                                ref={fieldRefs.q_content}
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
                            <input 
                                className="dp_f dp_c" 
                                type="radio" 
                                id="agreechk" 
                                name="agreechk" 
                                checked={formData.isChecked} 
                                onChange={handleChange}
                                ref={fieldRefs.agreechk}
                            />
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
    