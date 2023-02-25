import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../ArticleJia/ArticleJia.scss";
import "./CommentJia.scss";

const CommentJia = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);
  const [nextId, setNextId] = useState(0);
  const commentInput = useRef("");

  const preventReload = e => {
    setInput(e.target.value);
  };

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

  const commentList = comments.map(comment => (
    <li key={comment.id}>
      <span>dazezd_z</span>
      {comment.text}
    </li>
  ));

  return (
    <div className="CommentJia">
      <div className="feedsCommentBox">
        <div className="feedsOldComment">
          <div>
            <Link>
              <strong className="strong">fullmoon_e </strong>윤슬이 예쁘네요!😸
            </Link>
            <i className="fa-regular fa-heart icon-mini" />
          </div>
        </div>
        <div className="feedsNewComment">
          <ul className="commentList">{commentList}</ul>
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
  );
};

export default CommentJia;
