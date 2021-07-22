import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
const cardWidth = Dimensions.get("window").width / 2 - 26;
const PlaylistCard = ({ url, metadata }) => {
  return (
    <Wrapper>
      <Card>
        <TouchableOpacity>
          <Covers source={url} />
        </TouchableOpacity>

        <Btn>
          <Ionicons name="play" size={15} color="black" />
        </Btn>
      </Card>

      <SmallText>{metadata}</SmallText>
    </Wrapper>
  );
};
const SmallText = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 13px;
  color: #72727d;
`;
const Wrapper = styled.View`
  margin-bottom: 13px;
  width: ${cardWidth}px;
`;
const Covers = styled.Image`
  width: 100%;
  height: 100%;
`;
const Card = styled.View`
  position: relative;
  width: ${cardWidth}px;
  height: ${cardWidth}px;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
`;
const ButtonWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.View`
  z-index: 69;
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 26px;
  width: 26px;
  background-color: #fff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
export default PlaylistCard;
