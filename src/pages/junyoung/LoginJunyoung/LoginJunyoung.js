import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginJunyoung.scss";

const LoginJunyoung = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    if (id.includes("@") && pw.length >= 5) {
      navigate("/main-junyoung");
    } else {
      alert("아이디와 비밀번호를 다시 확인해주세요.");
    }
  };

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [active, setActive] = useState(false);

  function saveUserId(event) {
    setId(event.target.value); //이걸 모르겠음
    // console.log("id", id);
  }
  const saveUserPw = event => {
    setPw(event.target.value);
    // console.log("pw", pw);
  };

  const activeBtn = () => {
    return id.includes("@") && pw.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  return (
    <div className="loginJunyoung">
      <div className="westagram">Westagram</div>
      <form className="loginForm">
        <form action="#none" className="loginWrap">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={activeBtn}
            onChange={saveUserId}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            onKeyUp={activeBtn}
            onChange={saveUserPw}
          />
          <div>
            <button
              className={active ? "loginBtn" : "loginBtnDisabled"}
              disabled={!active}
              type="submit"
              id="login_login"
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="forgotPw">
          <a href="#!" className="pageMove">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginJunyoung;
