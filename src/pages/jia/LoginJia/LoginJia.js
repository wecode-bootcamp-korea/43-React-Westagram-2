import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginJia.scss";

const LoginJia = e => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate();

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const handleDisabled = () => {
    alert("아이디 혹은 패스워드를 확인해주세요.");
    setIsDisabled(true);
  };
  const checkAccount = e => {
    id.includes("@") && pw.length >= 5
      ? navigate("/main-jia")
      : handleDisabled();
  };
  return (
    <div className="LoginJia">
      <div className="body">
        <div className="layout">
          <h1 className="loginLogo">westagram</h1>
          <div className="loginBox">
            <div
              className="loginInput"
              onKeyUp={e => {
                e.key === "Enter" && checkAccount();
              }}
            >
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
              <button
                onChange={() => {
                  setIsDisabled(!isDisabled);
                }}
                onClick={checkAccount}
                className={`loginBtn ${id && pw ? "disabled" : "active"}`}
              >
                로그인
              </button>
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
