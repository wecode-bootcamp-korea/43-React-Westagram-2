import React from "react";
import "./CommentJunyoung.scss";

const CommentJunyoung = props => {
  const { comment, setComment, commentArray, setCommentArray } = props;

  const onChange = e => {
    setComment(e.target.value);
  };

  const onKeyUp = event => {
    if (event.key === "Enter") {
      setCommentArray([...commentArray, comment]);
      setComment("");
    }
  };
  const onClick = () => {
    setCommentArray([...commentArray, comment]);
    setComment("");
  };

  return (
    <div className="inputContainer">
      <div className="addComment">
        <input
          type="text"
          className="inputComment"
          placeholder="댓글 달기..."
          value={comment}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
        <button onClick={onClick} className="submitCommentInactive">
          게시
        </button>
      </div>
    </div>
  );
};

export default CommentJunyoung;
