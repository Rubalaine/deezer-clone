import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import ForYouCard from "./ForYouCard";

const covers = [
  {
    image: require("../assets/covers/flow.jpg"),
    metadata: "An infinite mix of favorites and new tracks",
  },
  {
    image: require("../assets/covers/daily-1.jpg"),
    metadata: "Featuring Masta, Nga,Prodígio, Yannic Afroman",
  },
  {
    image: require("../assets/covers/daily-2.jpg"),
    metadata: "Featuring Future, Young Thug, Travis Scott, DaBaby",
  },
  {
    image: require("../assets/covers/daily-3.jpg"),
    metadata: "Featuring Lil Baby, Kanye West, Lil Pump, Bad Bunny",
  },
];

const ForYou = () => {
  return (
    <Wrapper>
      <Top>
        <Label>Made for you</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <Bottom>
        {covers.map((cover, index) => (
          <ForYouCard url={cover.image} metadata={cover.metadata} key={index} />
        ))}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 20px;
`;
const Top = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ForYou;
