import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
const cardWidth = Dimensions.get("window").width / 2 - 26;
const PlaylistCard = ({ url, metadata }) => {
  return (
    <Card>
      <TouchableOpacity>
        <Covers source={url} />
      </TouchableOpacity>

      <Btn>
        <Ionicons name="play" size={15} color="black" />
      </Btn>
    </Card>
  );
};

const Covers = styled.Image`
  width: 100%;
  height: 100%;
`;
const Card = styled.View`
  margin-left: 20px;
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
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
