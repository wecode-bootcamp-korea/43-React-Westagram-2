import React, { useState } from "react";
import CommentJunyoung from "../CommentJunyoung/CommentJunyoung";
import FOOTER_LIST from "../AsideJunyoung/AsideJunyoung";
import "./MainJunyoung.scss";

const MainJunyoung = () => {
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const addComment = commentArray.map(commentArray => (
    <div key={commentArray.toString()}>{commentArray}</div>
  ));

  return (
    <main className="main">
      <header className="header">
        <nav className="headerNav">
          {/* 로고 */}
          <div className="logo">
            <div className="logoClick">
              <img
                src="/images/junyoung/instagram.png"
                className="aboutLogo"
                alt="instagram_logo"
              />
              {/* <a><i className="fab fa-instagram"></i></a> */}
            </div>
            <div className="weFont">
              <div className="we">
                <a href="#!" className="navLogo">
                  Westagram
                </a>
              </div>
            </div>
          </div>
          {/* 검색 */}
          <div className="searchBar">
            <input type="text" className="searchText" placeholder="검색" />
          </div>
          {/* 상단바 아이콘들 */}
          <div className="nav">
            <div className="navCompass" />
            <div className="navHeart" />
            <div className="navProfile" />
          </div>
        </nav>
      </header>
      {/* 피드 사진 */}
      <article className="articleWrap">
        <div className="feedBox" />
        <div className="feed">
          <div className="feedId">
            <div className="idRound">
              <div className="idBox">
                <div className="idBoxImg">
                  <img
                    className="idImg"
                    src="/images/junyoung/loopy.png"
                    alt="내 프로필"
                  />
                </div>
                <div className="idContainer">
                  <div className="idName">z_zxxn_n</div>
                  <div className="place">부산 해운대</div>
                </div>
              </div>
              <div className="moreDetails">
                <img
                  className="moreImg"
                  src="/images/junyoung/more.png"
                  alt="더보기"
                />
              </div>
            </div>
          </div>
          <div className="imgArea">
            <img
              className="feedImg"
              src="/images/junyoung/my_profile.png"
              alt="피드 사진"
            />
          </div>
          {/* 피드 사진 아래 아이콘 */}
          <div className="feedBottom">
            <div className="emoticonBox">
              <div className="emoticonBox2">
                <div className="heartBox">
                  <img
                    className="heart"
                    src="/images/junyoung/heart.png"
                    alt="하트"
                  />
                </div>
                <div className="commentBox">
                  <img
                    className="comment"
                    src="/images/junyoung/comment.png"
                    alt="코멘트"
                  />
                </div>
                <div className="directBox">
                  <img
                    className="direct"
                    src="/images/junyoung/direct.png"
                    alt="종이비행기"
                  />
                </div>
              </div>
              <div className="bookmarkBox">
                <img
                  className="bookmark"
                  src="/images/junyoung/bookmark.png"
                  alt="공유"
                />
              </div>
            </div>
          </div>

          {/* 피드 사진 아래 */}
          <div className="feedLikeBox">
            <div className="feedLikePicture">
              <img
                className="feedLikePeople"
                src="/images/junyoung/loopy.png"
                alt="세원"
              />
            </div>
            <p className="whoLike">
              z_zxxn_n
              <span className="feedLike">님 외 247명이 좋아합니다.</span>
            </p>
          </div>
          <div className="feedArticle">
            <div className="feedArticleBox">
              <div className="commentsContainer">
                <span className="whoFeed">z_zxxn_n</span>
                <span className="feedMsg">
                  멀리 떠나자 야이야이야이야이 바다로~ ..
                </span>
                <div className="moreMsg">더 보기</div>
              </div>
              <div className="comments1Box">
                <p className="whoComment">
                  ceohur<span className="commentMsg">어머 너무이뻐!</span>
                </p>
                <p className="whoComment">
                  Bussan.official
                  <span className="commentMsg">
                    안녕하세요! 이미지가 좋으세요^^ 디엠확인 부탁드려요~
                  </span>
                </p>
                <p className="whoComment">
                  dewrawing<span className="commentMsg">나랑도 가자~~!</span>
                </p>
              </div>
              <div className="newComments">
                {/* <ul className="comments_list"> */}
                <li className="commentsList">
                  <div className="commentsArea">
                    <span className="userId" />
                    <span className="commentContents" />
                  </div>
                </li>
                {/* </ul> */}
              </div>
              <div className="comments2">3시간 전</div>
            </div>
          </div>
          <div className="commentList" value={comment}>
            {addComment}
          </div>
          {/* <div className="inputContainer">
            <div className="typeComment" onSubmit={onSubmit}>
              <form className="commentWrap">
                <input
                  className="inputComment"
                  type="text"
                  placeholder="댓글 달기..."
                  onChange={onChange}
                  value={comment}
                />
              </form>
              <button type="submit" className="submitCommentInactive">
                게시
              </button> */}
          <CommentJunyoung
            key={commentArray.toString()}
            comment={comment}
            setComment={setComment}
            commentArray={commentArray}
            setCommentArray={setCommentArray}
          />
        </div>
        {/* </div>
        </div> */}
      </article>
      {/* 오른쪽 스토리부분 */}
      {/*사이드 오른쪽 부분  */}
      <section className="sideRight">
        <div className="sideContainer">
          <div className="wecodeLogo" />
          <div className="wecodeInfo">
            <div className="realWecode">
              <span>wecode_bootcamp</span>
              <p>
                WeCode<span>위코드</span>
              </p>
            </div>
          </div>
        </div>

        <div className="sideStory">
          <div className="sideNavigation">
            <span className="storyTitle">스토리</span>
            <div className="seeAll">모두 보기</div>
          </div>

          <div className="story">
            <div className="storyImg1" />
            <div className="storyText">
              <p className="storyTextBold">s.__.zy</p>
              <p className="storyTextColor">2시간 전</p>
            </div>
          </div>

          <div className="story">
            <div className="storyImg2" />
            <div className="storyText">
              <p className="storyTextBold">s__k9211</p>
              <p className="storyTextColor">33분 전</p>
            </div>
          </div>

          <div className="story">
            <div className="storyImg3" />
            <div className="storyText">
              <p className="storyTextBold">Ssoyoon</p>
              <p className="storyTextColor">10시간 전</p>
            </div>
          </div>

          <div className="story">
            <div className="storyImg4" />
            <div className="storyText">
              <p className="storyTextBold">h.dina</p>
              <p className="storyTextColor">20분 전</p>
            </div>
          </div>
        </div>

        {/* 추천 시작 */}
        <div className="sideRecom">
          <div className="sideNavigation">
            <span className="recomTitle">회원님을 위한 추천</span>
            <div className="seeAll">모두 보기</div>
          </div>

          <div className="sideWrap">
            <div className="sideWraps">
              <div className="sideImg1" id="side-wrap-img1" />
              <div className="sideChilds">
                <p className="recomName">NewMinji</p>
                <p className="recomInfo">haerin님 외 7명이 팔...</p>
              </div>
            </div>

            <button className="follow">팔로우</button>
          </div>

          <div className="sideWrap">
            <div className="sideWraps">
              <div className="sideImg2" id="side-wrap-img2" />
              <div className="sideChilds">
                <p className="recomName">chae_0.0</p>
                <p className="recomInfo">Ssoyoon님 외 4명이...</p>
              </div>
            </div>

            <button className="follow">팔로우</button>
          </div>

          <div className="sideWrap">
            <div className="sideWraps">
              <div className="sideImg3" id="side-wrap-img3" />
              <div className="sideChilds">
                <p className="recomName">bbobbi</p>
                <p className="recomInfo">s._.zy 외 12명이 팔로...</p>
              </div>
            </div>

            <button className="follow">팔로우</button>
          </div>
        </div>

        <div className="footerWrapper">
          {FOOTER_LIST.map(info => (
            <span key={info.id} className="footerContent">
              {info.title} ·{" "}
            </span>
          ))}
          {/* <p className="footerContent">
            Instagram 정보 · 지원 · 홍보센터 · API · <br />
            채용정보 개인정보처리방침 · 약관 ·<br /> 디렉터리 · 프로필 ·
            해시태그 · 언어
          </p> */}
          <p className="version">ⓒ 2023 INSTAGRAM</p>
        </div>
      </section>
    </main>
  );
};

export default MainJunyoung;
