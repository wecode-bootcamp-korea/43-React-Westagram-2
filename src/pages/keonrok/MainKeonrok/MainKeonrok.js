import React from "react";
import "./MainKeonrok.scss";

const MainKeonrok = () => {
  return (
    <div className="mainKeonrok">
      <article>
        <div className="writer">
          <img
            src="./../public/images/img_kr.jpg"
            width="32.3px"
            height="32.3px"
            alt="writer_img"
          />
          <span>kr_shin</span>
          <a href="">
            <i className="fas fa-ellipsis-h" />
          </a>
        </div>
        <div className="writeImage">
          <img
            src="../../../public/images/img_kr.jpg"
            width="614.3px"
            height="614.3px"
            alt="writeImage"
          />
        </div>
        <div className="reactionButton">
          <div>
            <button>
              <i className="far fa-heart" />
            </button>
            <button>
              <i className="far fa-comment" />
            </button>
            <button>
              <i className="fas fa-share-square" />
            </button>
          </div>
          <div>
            <button>
              <i className="far fa-bookmark" />
            </button>
          </div>
        </div>
        <div className="writeReaction">
          <div className="writeReactionImg">
            <img
              src="./../public/images/img_kr.jpg"
              width="32.3px"
              height="32.3px"
            />
            <span>wecode님 외 43명이 좋아합니다.</span>
          </div>
          <div className="replyBox">
            <div className="surfSentence">
              <span>JIM_ROGERS</span>
              <p>Nice to meet you.</p>
            </div>
            <div className="moreView">
              <a href="">더보기</a>
            </div>
          </div>
          <div className="friendsSentence">
            <span>8b_DOLCE</span>
            <p>Wow!</p>
          </div>
          <div className="time">
            <p>5분전</p>
          </div>
          <div className="feedCommentContainer">
            <input
              className="feedComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button>게시</button>
          </div>
        </div>
      </article>
      <aside />
      <div className="asideHead">
        <img
          src="./../../public/images/keonrok/img_kr.jpg"
          width="56px"
          height="56px"
          alt="img_kr 이미지"
        />
        <div className="asideHeadText">
          <p>kr_shin</p>
          <p>kr_shin | 신건록</p>
        </div>
      </div>
      <div className="asideBody">
        <div className="asideBodyStory">
          <span>스토리</span>
          <p>모두보기</p>
        </div>
        <div className="asideBodyImgId">
          <div className="asidehi">
            <img
              src="../../../public/images/mukim.png"
              width="32px"
              height="32px"
              alt="김마음 프로필이미지"
            />
            <div className="asidehi2">
              <span>heart_kim</span>
              <p>5시간 전</p>
            </div>
          </div>
          <div className="asidehi">
            <img
              src="../../../public/images/krkim.png"
              width="32px"
              height="32px"
            />
            <div className="asidehi2">
              <span>ray_kim</span>
              <p>9분전</p>
            </div>
          </div>
          <div className="asidehi">
            <img
              src="../../../public/images/khkang.png"
              width="32px"
              height="32px"
            />
            <div className="asidehi2">
              <span>kh_kang</span>
              <p>50분 전</p>
            </div>
          </div>
          <div className="asidehi">
            <img
              src="../../../public/images/jeonil.png"
              width="32px"
              height="32px"
            />
            <div className="asidehi2">
              <span>jeonil_lee</span>
              <p>30분 전</p>
            </div>
          </div>
        </div>
      </div>
      <div className="asideTails">
        <div className="asideTailsRecommend">
          <span>회원님을 위한 추천</span>
          <p>모두 보기</p>
        </div>
        <div className="asideTailsRecommend1">
          <img
            src="../../../public/images/mskim.png"
            width="32px"
            height="32px"
            alt="김명성 프로필이미지"
          />
          <div className="asideTailsRecommend2">
            <span>ms_kim</span>
            <p>Front-End 개발자들이 팔로우 하고있습니다.</p>
          </div>
        </div>
        <div className="asideTailsRecommend1">
          <img
            src="../../../public/images/jbkang.png"
            width="32px"
            height="32px"
            alt="강종범 프로필이미지"
          />
          <div className="asideTailsRecommend2">
            <span>jongbeom_kang</span>
            <p>Back-End 개발자들이 팔로우 하고있습니다.</p>
          </div>
        </div>
        <div className="asideTailsRecommend1">
          <img
            src="../../../public/images/swhan.png"
            width="32px"
            height="32px"
            alt="한신웅 프로필이미지"
          />
          <div className="asideTailsRecommend2">
            <span>sw_han</span>
            <p>Front-End 개발자들이 팔로우 하고있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainKeonrok;
