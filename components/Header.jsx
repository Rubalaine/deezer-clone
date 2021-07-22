import React from "react";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = ({ name }) => {
  return (
    <Head>
      <Title>{name}</Title>
      <Icons>
        <Ionicons name="ios-notifications-outline" size={24} color="#72727d" />
        <Ionicons name="ios-settings-outline" size={24} color="#72727d" />
      </Icons>
    </Head>
  );
};

const Icons = styled.View`
  flex-direction: row;
  width: 70px;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: 32px;
  letter-spacing: 3px;
  font-family: "Poppins_600SemiBold";
`;
const Head = styled.View`
  margin-top: 10px;
  margin-bottom: 15px;
  height: 30px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
`;

export default Header;
