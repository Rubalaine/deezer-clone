import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const FavoriteCard = ({ url }) => {
  return (
    <TouchableOpacity>
      <Card>
        <ImageCover source={url} />
      </Card>
    </TouchableOpacity>
  );
};

const Card = styled.View`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background-color: pink;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  overflow: hidden;
`;
const ImageCover = styled.Image`
  height: 100%;
  width: 100%;
`;
export default FavoriteCard;
