import React from "react";
import styled from "styled-components";
import ProfileImg from "../images/profile.png";

const Card = styled.div`
  background: none;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 50vh;
  margin: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 18vh;
  height: 18vh;
  margin-top: 2vh;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 2;
`;

const HalfCircle = styled.div`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: rotate(135deg) translate(-30px);
  height: 100px;
  width: 200px;
  border-radius: 150px 150px 0 0;
  background-color: #aad8d3;
`;
const NameText = styled.div`
  color: #eeeeee;
`;
const MoneyText = styled.div`
  color: #eeeeee;
`;

const ProfileCard = () => {
  return (
    <Card>
      <ProfileImage src={ProfileImg} />
      <HalfCircle />
      <NameText>First Last</NameText>
      <MoneyText>$50</MoneyText>
    </Card>
  );
};

export default ProfileCard;
