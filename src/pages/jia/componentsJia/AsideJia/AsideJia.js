import React from "react";
import { Link } from "react-router-dom";

import "./AsideJia.scss";

import ProfileImg from "../../assetsJia/MainJia/profile.png";
import MyImg from "../../assetsJia/MainJia/me.png";
import CatJumpImg from "../../assetsJia/MainJia/profile3.png";
import CatPixelImg from "../../assetsJia/MainJia/cat.png";
import FigmaImg from "../../assetsJia/MainJia/figma.png";
import ProfileIllustImg from "../../assetsJia/MainJia/profile4.png";

const AsideJia = () => {
  return (
    <div className="AsideJia">
      <div className="profileBox">
        <div className="profileToggleImg">
          <img alt="profile" src={ProfileImg} />
        </div>
        <div className="profileToggleBox">
          <div className="profileToggleBoxUp">
            <i className="fa-regular fa-user"> 프로필</i>
            <i className="fa-regular fa-bookmark"> 북마크</i>
            <i className="fa-regular fa-gear"> 설정</i>
          </div>
          <Link className="profileToggleBoxDown" to="" />
        </div>

        <div className="profileBoxNickname">
          <Link to="">
            {" "}
            <span className="accountNickname">dazezd_z</span>{" "}
          </Link>
          위코드 43기 교육생
        </div>
      </div>

      <div className="recommendBox">
        <div className="recommendUpside">
          회원님을 위한 추천 <Link to="">모두 보기</Link>
        </div>
        <div className="recommendBottom">
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={MyImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={ProfileIllustImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={CatPixelImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={FigmaImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={CatJumpImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
          <div className="recommendIndividual">
            <div className="recommendIndividualLeft">
              <img alt="recommendProfile" src={ProfileImg} />
              <div className="recommendIndividualMiddle">
                <div>joaaahye</div>
                <div>fullmoon_e님 외 1명이 팔로우합니다.</div>
              </div>
            </div>
            <Link to="" className="recommendIndividualRight">
              팔로우
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <p>
          소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관
          · 위치 · 언어
        </p>
        <p>© 2023 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
};

export default AsideJia;
