import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import FavoriteCard from "./FavoriteCard";
import { Label } from "./GlobalStyles";

const covers = [
  require("../assets/covers/cover-1.jpg"),
  require("../assets/covers/cover-2.jpg"),
  require("../assets/covers/cover-3.jpg"),
  require("../assets/covers/cover-4.jpg"),
  require("../assets/covers/cover-5.jpg"),
  require("../assets/covers/cover-6.jpg"),
  require("../assets/covers/cover-7.jpg"),
];
const FavoritesList = () => {
  return (
    <Wrapper>
      <Top>
        <Label>Your favorite artists</Label>
      </Top>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Bottom>
          {covers.map((url, index) => (
            <FavoriteCard url={url} key={index} />
          ))}
        </Bottom>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin-bottom: 20px;
`;
const Top = styled.View`
  padding: 20px;
`;
const Bottom = styled.View`
  flex-direction: row;
`;

export default FavoritesList;
