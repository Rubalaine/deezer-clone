import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import HighlightCard from "./HighlightCard";

const Highlights = ({ covers, title }) => {
  return (
    <Wrapper>
      <Top>
        <Label>{title}</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <Bottom>
        {covers.map((cover, index) => (
          <HighlightCard url={cover.image} label={cover.label} key={index} />
        ))}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 20px;
`;
const Top = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Highlights;
