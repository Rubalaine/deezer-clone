import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
const cardWidth = Dimensions.get("window").width / 2 - 30;
const CategoryCard = ({ url, label }) => {
  return (
    <Card>
      <TouchableOpacity>
        <Covers source={url} />
      </TouchableOpacity>
      <ButtonWrapper>
        <SmallText>{label}</SmallText>
      </ButtonWrapper>
    </Card>
  );
};
const SmallText = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 16px;
  color: white;
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
  height: 90px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  /* margin-left: 20px; */
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
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;
export default CategoryCard;
