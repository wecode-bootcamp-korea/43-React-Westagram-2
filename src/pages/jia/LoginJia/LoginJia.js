import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginJia.scss";

const LoginJia = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  return (
    <div className="LoginJia">
      <div className="body">
        <div className="layout">
          <h1 className="loginLogo">westagram</h1>
          <div className="loginBox">
            <div className="loginInput">
              <input
                className="idInput"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={id}
                onChange={saveUserId}
              />
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                value={pw}
                onChange={saveUserPw}
              />
            </div>

            <div className="loginBtnBox">
              <button className="loginBtn">로그인</button>
            </div>
          </div>
          <Link>
            <h6>비밀번호를 잊으셨나요?</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginJia;
