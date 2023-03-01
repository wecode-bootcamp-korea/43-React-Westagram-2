import React from "react";

import "./MainJia.scss";

import NavJia from "../componentsJia/NavJia/NavJia";
import ArticleJia from "../componentsJia/ArticleJia/ArticleJia";
import AsideJia from "../componentsJia/AsideJia/AsideJia";
import StoryJia from "../componentsJia/StoryJia/StoryJia";

const MainJia = () => {
  return (
    <div className="MainJia">
      <NavJia />
      <div className="mainBox">
        <div className="feed">
          <StoryJia />
          <ArticleJia />
        </div>
        <AsideJia />
      </div>
    </div>
  );
};

export default MainJia;
