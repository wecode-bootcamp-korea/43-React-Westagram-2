import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import CommentJia from "../CommentJia/CommentJia";
import "./ArticleJia.scss";

import SeaImg from "../../assetsJia/MainJia/sea.png";
import FeedProfileImg from "../../assetsJia/MainJia/profile2.png";

const ArticleJia = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  const [nextId, setNextId] = useState(0);
  const commentInput = useRef("");

  const submit = e => {
    e.preventDefault();
    const newComments = comments.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setComments(newComments);
    setInput("");
  };

  const preventReload = e => {
    setInput(e.target.value);
  };

  const commentList = comments.map(comment => (
    <li key={comment.id}>
      <span>dazezd_z</span>
      {comment.text}
    </li>
  ));

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
              <Link className="feedsMoreComments">댓글 15개 모두 보기</Link>
            </div>
          </div>
          <div className="feedsCommentBox">
            <div className="feedsNewComment">
              <CommentJia commentList={commentList} />
              <form className="feedsCommentInputBox" onSubmit={submit}>
                <input
                  className="feedsCommentInput"
                  name="comment"
                  type="text"
                  placeholder="댓글 달기..."
                  value={input}
                  onChange={preventReload}
                  ref={commentInput}
                />
                <button className="feedsCommentUpload" type="submit">
                  게시
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleJia;
