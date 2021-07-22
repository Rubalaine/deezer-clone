import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const MightLoveCard = ({ url, name }) => {
  return (
    <Wrapper>
      <TouchableOpacity>
        <Card>
          <ImageCover source={url} />
        </Card>
      </TouchableOpacity>
      <ArtistName>{name}</ArtistName>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-left: 12px;
  width: 150px;
  align-items: center;
`;
const ArtistName = styled.Text`
  text-transform: capitalize;
  margin-top: 4px;
  font-family: "Poppins_400Regular";
  font-size: 14px;
  color: #72727d;
`;

const Card = styled.View`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  background-color: pink;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const ImageCover = styled.Image`
  height: 100%;
  width: 100%;
`;
export default MightLoveCard;
