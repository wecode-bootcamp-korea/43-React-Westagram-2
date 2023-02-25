import React from "react";
import { Link } from "react-router-dom";
import "./LoginJia.scss";

const LoginJia = () => {
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
                name="id"
              />
              <input
                className="pwInput"
                type="password"
                placeholder="비밀번호"
                name="password"
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
