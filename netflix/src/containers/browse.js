import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import githubicon from '../icons/github.svg';
import emailicon from '../icons/email.svg';
import tistoryicon from '../icons/tistory.svg';
import velogicon from '../icons/velog.svg';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('portfolio');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { auth } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 한 번에 보여줄 슬라이드 수를 설정
    slidesToScroll: 1, // 한 번 스크롤시 이동할 슬라이드 수를 설정
    draggable: true, // 드래그 가능 여부 설정
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000, // screen width >= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 2000, // screen width >= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200, // screen width >= 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800, // screen width >= 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600, // screen width >= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#000",
          borderRadius: "10px",

        }}
      >
        <ul style={{ margin: "0px",color: "blue", }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "white",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, { keys: ['data.description', 'data.title', 'data.genre'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm, slides, category]);

  const dontShowOnSmallViewPort = true;
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="cloud" dontshowonsmallviewport={dontShowOnSmallViewPort.toString()}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink $activeLink={category === 'portfolio' ? 'true' : 'false'} onClick={() => setCategory('portfolio')}>
              Portfolio
            </Header.TextLink>
            <Header.TextLink $activeLink={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Skills
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => auth.signOut()}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>🙋"Hello hankyo world!"</Header.FeatureCallOut>
          <Header.Text>
          다양한 기술을 적용하고 문제를 해결하는 것에 즐거움을 느끼는<br />
          지속적인 성장과 학습을 추구하는 <b>인프라 엔지니어, 개발자</b>입니다.<br /><br />
          이 사이트는 저의 성장과정과 업무 경험을 공유하는 플랫폼입니다.
          
          </Header.Text>
          <div>
          <Header.GithubButton onClick={() => { window.open("https://github.com/tkfka1", "_blank"); }}><img src={githubicon} alt="" /><br />Github</Header.GithubButton>
          <Header.EmailButton onClick={() => { window.open("mailto:tkfka0502@gmail.com", "_blank"); }}><img src={emailicon} alt="" /><br />Email</Header.EmailButton>
          <Header.TistoryButton onClick={() => { window.open("https://trinityforce.tistory.com", "_blank"); }}><img src={tistoryicon} alt="" /><br />Tistory</Header.TistoryButton>
          <Header.VelogButton onClick={() => { window.open("https://velog.io/@tkfka", "_blank"); }}><img src={velogicon} alt="" /><br />Velog</Header.VelogButton>
          </div>

          
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            
            <Card.Entities>
            <Slider {...settings}>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={process.env.PUBLIC_URL +`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
              </Slider>
            </Card.Entities>

            
            {/* <Entities>
            
            {slideItem.data.map((item) => (
              <Slide key={item.docId}>
                <Card.Item item={item}>
                  <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              </Slide>
            ))}
            
          </Entities> */}
          
          
            <Card.Feature category={category}>
              <Player>
                {/* <Player.Button />
                <Player.Video src={process.env.PUBLIC_URL +"/videos/bunny.mp4"} /> */}
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
