import React from "react";
import "./StoryJia.scss";

import ProfileImg from "../../assetsJia/MainJia/profile.png";
import MyImg from "../../assetsJia/MainJia/me.png";
import CatJumpImg from "../../assetsJia/MainJia/profile3.png";
import CatPixelImg from "../../assetsJia/MainJia/cat.png";
import FigmaImg from "../../assetsJia/MainJia/figma.png";
import ProfileIllustImg from "../../assetsJia/MainJia/profile4.png";

const StoryJia = () => {
  return (
    <div className="StoryJia">
      <header>
        <div>
          <img alt="profile" src={ProfileImg} />
        </div>
        <div>
          <img alt="profile" src={CatJumpImg} />
        </div>
        <div>
          <img alt="profile" src={CatPixelImg} />
        </div>
        <div>
          <img alt="profile" src={MyImg} />
        </div>
        <div>
          <img alt="profile" src={FigmaImg} />
        </div>
        <div>
          <img alt="profile" src={ProfileIllustImg} />
        </div>
        <div>
          <img alt="profile" src={CatJumpImg} />
        </div>
        <div>
          <img alt="profile" src={CatPixelImg} />
        </div>
        <div>
          <img alt="profile" src={MyImg} />
        </div>
        <div>
          <img alt="profile" src={FigmaImg} />
        </div>
        <div>
          <img alt="profile" src={ProfileIllustImg} />
        </div>
      </header>
    </div>
  );
};

export default StoryJia;
