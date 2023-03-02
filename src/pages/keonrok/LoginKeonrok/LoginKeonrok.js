import React, { useState } from "react";
import "./LoginKeonrok.scss";
import { useNavigate } from "react-router-dom";

const LoginKeonrok = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleIdInput = event => {
    setId(event.target.value);
    console.log("ID 입력확인");
  };

  const handlePasswordInput = event => {
    setPassword(event.target.value);
    console.log("PW 입력확인");
  };

  const [isActive, setIsActive] = useState(false);

  const isInputLogin = () => {
    return id.includes("@") && password.length >= 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  const Login = e => {
    e.preventDefault();

    fetch("http://10.58.52.65:8001/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => console.log(data));
    //응답

    if (isActive) {
      navigate("/main-keonrok");
    }
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
            onClick={Login}
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
