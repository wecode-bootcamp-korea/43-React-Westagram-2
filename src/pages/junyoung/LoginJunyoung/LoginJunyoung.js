import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginJunyoung.scss";

const LoginJunyoung = () => {
  const navigate = useNavigate();

  const goToMain = event => {
    // event.preventDefault();
    // if (id.includes("@") && pw.length >= 5) {
    //   fetch("http://10.58.52.56:3000/auth/signin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify({
    //       email: id,
    //       password: pw,
    //     }),
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       if (data.accessToken) {
    //         localStorage.setItem("token", data.accessToken);
    //       } else {
    //         alert("아이디와 비밀번호를 다시 확인해주세요!");
    //       }
    //     });
    // }
    navigate("/main-junyoung");
    // } else {
    // alert("아이디와 비밀번호를 다시 확인해주세요.");
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      goToMain();
    }
  };
  //onKeyPress 를 안쓸거면 form 태그로 바꿔주기
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [active, setActive] = useState(false);

  function saveUserId(event) {
    setId(event.target.value);
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
  //////////

  return (
    <div className="loginJunyoung">
      <div className="westagram">Westagram</div>
      <div className="loginForm">
        <div action="#none" className="loginWrap">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={activeBtn}
            onKeyPress={onKeyPress}
            onChange={saveUserId}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            onKeyUp={activeBtn}
            onKeyPress={onKeyPress}
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
        </div>
        <div className="forgotPw">
          <a href="#!" className="pageMove">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginJunyoung;
