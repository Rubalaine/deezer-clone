import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Label } from "./GlobalStyles";

const SongCatcher = () => {
  return (
    <Wrapper>
      <Label>From a sound</Label>
      <TouchableOpacity>
        <Catcher>
          <Logo source={require("../assets/covers/songcatcher.png")} />
          <Info>
            <Title>What's this song?</Title>
            <SmallText>Identify the song playing around you</SmallText>
          </Info>
        </Catcher>
      </TouchableOpacity>
    </Wrapper>
  );
};

const Title = styled.Text`
  color: white;
  font-size: 15px;
  font-family: "Poppins_600SemiBold";
`;
const SmallText = styled.Text`
  color: white;
  font-size: 13px;
  font-family: "Poppins_400Regular";
`;
const Logo = styled.Image`
  height: 65px;
  width: 65px;
`;
const Catcher = styled.View`
  margin-top: 10px;
  border-radius: 4px;
  background-color: #007fea;
  width: 100%;
  height: 75px;
  flex-direction: row;
  align-items: center;
`;
const Info = styled.View``;
const Wrapper = styled.View`
  padding: 0 20px;
  margin: 10px 0;
`;
export default SongCatcher;
