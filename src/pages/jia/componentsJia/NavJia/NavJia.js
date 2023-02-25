import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavJia.scss";
import ProfileImg from "../../assetsJia/MainJia/profile.png";

const NavJia = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };

  return (
    <div className="NavJia">
      <div className="body">
        <div className="navBox">
          <div className={isOpen ? "hideMenu" : "showMenu"}>
            <div className="navWrap">
              <div className="navWrapToggle">
                <Link className="logoWestagram">Westagram</Link>
                <div className="navMiddle">
                  <Link className="navMiddleMenu home">
                    <i className="fa-solid fa-house" />
                    <span>홈</span>
                  </Link>
                  <Link className="navMiddleMenu search">
                    <i className="fa-solid fa-magnifying-glass" />
                    <span>검색</span>
                  </Link>
                  <Link className="navMiddleMenu explore">
                    <i className="fa-regular fa-compass" />
                    <span>탐색 탭</span>
                  </Link>
                  <Link className="navMiddleMenu reels">
                    <i className="fa-solid fa-video" />
                    <span>릴스</span>
                  </Link>
                  <Link className="navMiddleMenu message">
                    <i className="fa-regular fa-paper-plane" />
                    <span>메세지</span>
                  </Link>
                  <Link className="navMiddleMenu update">
                    <i className="fa-regular fa-heart" />
                    <span>알림</span>
                  </Link>
                  <Link className="navMiddleMenu update">
                    <i className="fa-regular fa-square-plus" />
                    <span>만들기</span>
                  </Link>
                  <Link className="navMiddleMenu profile">
                    <img
                      className="navProfile"
                      src={ProfileImg}
                      alt="profile"
                    />
                    <span>프로필</span>
                  </Link>
                  <Link className="navMiddleMenu logout" to="/">
                    <i className="fa-solid fa-arrow-right-from-bracket" />
                    <span>로그아웃</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="navBottom">
            <i className="fa-solid fa-bars" onClick={() => toggleMenu()} />
            <span>접기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavJia;
