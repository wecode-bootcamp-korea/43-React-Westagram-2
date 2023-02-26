import React from "react";

import "./CommentJia.scss";

const CommentJia = props => {
  const { commentList } = props;

  return (
    <div className="CommentJia">
      <ul className="commentList">{commentList}</ul>
    </div>
  );
};

export default CommentJia;
