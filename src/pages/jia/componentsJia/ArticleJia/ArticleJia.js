import React, { useState } from "react";
import { Link } from "react-router-dom";

import CommentJia from "./CommentJia";
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
            <strong>animal_love</strong>
            <span>님 </span>
            <strong>
              외 <strong className="feedsLikeNumber">70</strong>명
            </strong>
            이 좋아합니다
          </div>
          <div className="feedsContentBox">
            <Link to="">
              <strong>photo_stagram </strong>
            </Link>
            동해 바다의 윤슬...
            <Link to="">더보기</Link>
          </div>

          <div className="feedsCommentBox">
            <div className="feedsOldComment">
              <div>
                <Link>
                  <strong>fullmoon_e </strong>윤슬이 예쁘네요!
                </Link>
                <i className="fa-regular fa-heart icon-mini" />
              </div>
            </div>
            <div className="feedsNewComment">
              <CommentJia />
            </div>
          </div>
        </div>
        <div className="feedsCommentInputBox">
          <input className="feedsCommentInput" placeholder="댓글 달기..." />
          <button className="feedsCommentUpload">게시</button>
        </div>
      </article>
    </div>
  );
};

export default ArticleJia;

//map test
// const numbers = ["dazezd_z ", "comment"];
// const listItems = numbers.map((numbers, index) => (
//   <span key={index}>{numbers}</span>
// ));

// const handleComment = e => {
//   e.key === "Enter" ? console.log("enter") : console.log("fail");
// };
