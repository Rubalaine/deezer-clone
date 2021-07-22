import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Label } from "./GlobalStyles";
import MightLoveCard from "./MightLoveCard";

const covers = [
  { image: require("../assets/covers/artist-1.jpg"), name: "Travis Scott" },
  { image: require("../assets/covers/artist-2.jpg"), name: "Kanye West" },
  { image: require("../assets/covers/artist-3.jpg"), name: "Post malone" },
  { image: require("../assets/covers/artist-4.jpg"), name: "Beyoncé" },
  { image: require("../assets/covers/artist-5.jpg"), name: "cardi b" },
];
const MightLove = () => {
  return (
    <Wrapper>
      <Top>
        <Label>You might love</Label>
      </Top>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Bottom>
          {covers.map((cover, index) => (
            <MightLoveCard url={cover.image} name={cover.name} key={index} />
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

export default MightLove;
