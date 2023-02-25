import React from "react";
import { Link } from "react-router-dom";

import CommentJia from "../CommentJia/CommentJia";
import "./ArticleJia.scss";

import SeaImg from "../../assetsJia/MainJia/sea.png";
import FeedProfileImg from "../../assetsJia/MainJia/profile2.png";

const ArticleJia = () => {
  return (
    <div className="ArticleJia">
      <article>
        <div className="feedsUpside">
          <div className="feedsUpsideLeft">
            <img alt="profile" src={FeedProfileImg} />
            <Link className="feedsNickname" to="">
              photo_stagram
            </Link>
            <span className="feedsContentTime">· 1시간</span>
          </div>
          <i className="fa-solid fa-ellipsis" />
        </div>
        <img className="feedsContentPhoto" alt="feeds" src={SeaImg} />
        <div className="feedsBottom">
          <div className="feedsIcon">
            <div className="feedsIconLeft">
              <i className="fa-regular fa-heart" />
              <i className="fa-regular fa-comment icon-chat" />
              <i className="fa-regular fa-paper-plane" />
            </div>
            <i className="fa-regular fa-bookmark" />
          </div>
          <div className="feedsLike">
            <span className="strong">animal_love</span>
            <span>님 </span>
            <span className="strong">
              외 <span className="feedsLikeNumber">70</span>명
            </span>
            이 좋아합니다
          </div>
          <div className="feedsContentBox">
            <Link to="">
              <span className="strong">photo_stagram </span>
            </Link>
            🌊✨ 동해 바다의 윤슬...
            <Link to=""> 더보기</Link>
            <div className="feedsMoreComments">
              <Link className="feedsMoreCommentsText">댓글 15개 모두 보기</Link>
            </div>
          </div>

          <CommentJia />
        </div>
      </article>
    </div>
  );
};

export default ArticleJia;
