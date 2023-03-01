import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginKeonrok.scss";

const LoginKeonrok = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);

  const isInputLogin = () => {
    return id.includes("@") && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  return (
    <article className="loginKeonrok">
      <div className="loginWrap">
        <div className="loginLogo">westagram</div>
        <form className="loginForm">
          <input
            id="login_id"
            className="loginText"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={isInputLogin}
          />
          <input
            id="login_pw"
            className="loginText"
            type="password"
            name="id"
            placeholder="비밀번호"
            onChange={handlePasswordInput}
            onKeyUp={isInputLogin}
          />
          <button
            id="login_btn"
            className={isActive ? "activeButton" : "unActiveButton"}
            type="button"
            disabled={id === "" || password === "" ? true : false}
          >
            로그인
          </button>
        </form>
        <a className="loginBottom" href="./lostPassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
};

export default LoginKeonrok;
