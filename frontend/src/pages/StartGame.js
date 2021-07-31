import React, { useState, useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FaSlideshare } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "@material-ui/core/Link";
import { SliderData as slides } from "../data/SliderData";

import styled, { css } from "styled-components/macro";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundImage: `url(${SlothImage})`,
//     backgroundSize: "cover",
//     height: "100vh",
//     width: "100%",
//     display: "flex",
//     position: "absolute",
//     flexGrow: 1,
//   },
//   heroText: {},
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },

//   heroFlexBox: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-between",
//     height: "100%",
//   },

//   heroFlexItem: {
//     justifyContent: "start",
//   },
// }));

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  flex-direction: row;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #eeeeee;
  cursor: pointer;
  background: none;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  user-select: none;
  transition: 0.3s;
  justify-content: space-between;
  &:hover {
    color: #00adb5;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoIosArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoIosArrowForward)`
  ${arrowButtons}
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: calc(100% - 100px);
  color: #fff;
  justify-content: space-between;
  padding: 2rem;
  h1 {
    font-size: 100px;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-top: 0.8rem;
  }
  h2 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-align: left;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const StartGame = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   };

  //   timeout.current = setTimeout(nextSlide, 3000);

  //   return () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     }
  //   };
  // }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} />
                  <HeroContent>
                    <h1>{slide.price}</h1>
                  </HeroContent>
                  <HeroContent>
                    <SliderButtons>
                      <PrevArrow onClick={prevSlide} />
                      <NextArrow onClick={nextSlide} />
                    </SliderButtons>
                  </HeroContent>
                  <HeroContent>
                    <h2>{slide.difficulty}</h2>
                    <Button variant="contained" color="primary">
                      PLAY NOW
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        ;
      </HeroWrapper>
    </HeroSection>
  );
};

export default StartGame;
