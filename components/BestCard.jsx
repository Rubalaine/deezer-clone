import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
const cardWidth = Dimensions.get("window").width / 2 - 50;
const BestCard = ({ url, description, title }) => {
  return (
    <Wrapper>
      <Card>
        <TouchableOpacity>
          <Covers source={url} />
        </TouchableOpacity>

        <Btn
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
            elevation: 1,
          }}
        >
          <Ionicons name="play" size={15} color="black" />
        </Btn>
      </Card>
      <Bottom>
        <Label numberOfLines={2}>{title}</Label>
        <SmallText numberOfLines={4}>{description}</SmallText>
      </Bottom>
    </Wrapper>
  );
};
const Bottom = styled.View`
  margin-top: 5px;
  padding: 0 10px;
`;

const SmallText = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 15px;
  color: #72727d;
  margin-top: 6px;
`;
const Wrapper = styled.View`
  padding-bottom: 5px;
  margin-bottom: 13px;
  margin-left: 20px;
  width: ${cardWidth}px;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
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
  /* overflow: hidden; */
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
  bottom: -10px;
  left: 10px;
  height: 26px;
  width: 26px;
  background-color: #fff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
export default BestCard;
