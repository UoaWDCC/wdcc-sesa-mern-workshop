import React from "react";
import styled from "styled-components";
import {
  IoArrowBackOutline,
  IoChatboxEllipsesOutline,
  IoEllipsisVerticalSharp,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { Button } from "@material-ui/core";

const ProfileSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-color: #171c20;
`;
const ProfileWrapper = styled.div`
  padding: 10px 40px 10px 40px;
`;
const ProfileNavList = styled.nav`
  justify-content: space-between;
  height: 40px;
  display: flex;
  width: 100%;
`;

const ProfileHeadersList = styled.div`
  justify-content: space-between;
  height: 10vh;
  display: flex;
  width: 100%;
  background: none;
  margin-top: 3vh 40px 3vh 40px;
  padding-top: 10px;
  padding-bottom: 10vh;
  align-items: center;
  background: none;

  h1 {
    color: #eeeeee;
    font-size: 40px;
    font-weight: 600;
  }

  em {
    color: #00adb5;
    font-style: normal;
    font-size: 40px;
    font-weight: 600;
  }

  h2 {
    color: #eeeeee;
    font-size: 40px;
    font-weight: 300;
    margin-right: 50px;
  }
`;

const JoinButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const JoinButton = styled.div`
  flex-direction: row-reverse;
  display: flex;
  width: 200px;
  background: none;
  align-items: flex-end;
`;

const ProfileCarousel = styled.div`
  display: flex;
  height: 50vh;
  background: none;
`;
const BackButton = styled(Link)`
  background: none;
  white-space: nowrap;
  outline: none;
  border: none;
  width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #eeeeee;
`;

const Arrow = styled(IoArrowBackOutline)`
  margin-left: 0.5rem;
  margin-top: 3px;
  margin-right: 0.3rem;
  height: 20px;
  width: 20px;
`;

const ChatIcon = styled(IoChatboxEllipsesOutline)`
  height: 30px;
  width: 30px;
  color: #eeeeee;
`;
const EllipsisIcon = styled(IoEllipsisVerticalSharp)`
  height: 30px;
  width: 30px;
  color: #eeeeee;
`;

const ProfilePage = () => {
  return (
    <ProfileSection>
      <ProfileWrapper>
        <ProfileNavList>
          <BackButton>
            <Arrow />
            BACK
          </BackButton>
          <ProfileWrapper>
            <ChatIcon />
            <EllipsisIcon />
          </ProfileWrapper>
        </ProfileNavList>
        <ProfileHeadersList>
          <h1>
            Potential <em>Procrasti-Champs</em>
          </h1>
          <h2>0 / 20</h2>
        </ProfileHeadersList>
        <ProfileCarousel>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </ProfileCarousel>
        <JoinButtonWrapper>
          <JoinButton>
            <Button fullWidth variant="contained" color="primary">
              JOIN
            </Button>
          </JoinButton>
        </JoinButtonWrapper>
      </ProfileWrapper>
    </ProfileSection>
  );
};

export default ProfilePage;
