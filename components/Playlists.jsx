import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import PlaylistCard from "./PlaylistCard";

const covers = [
  {
    image: require("../assets/covers/playlist-1.jpg"),
    metadata: "An infinite mix of favorites and new tracks",
  },
  {
    image: require("../assets/covers/playlist-4.jpg"),
    metadata: "Featuring Masta, Nga,Prodígio, Yannic Afroman",
  },
  {
    image: require("../assets/covers/playlist-2.jpg"),
    metadata: "Featuring Future, Young Thug, Travis Scott, DaBaby",
  },
  {
    image: require("../assets/covers/playlist-3.jpg"),
    metadata: "Featuring Lil Baby, Kanye West, Lil Pump, Bad Bunny",
  },
];

const Playlists = () => {
  return (
    <Wrapper>
      <Top>
        <Label>Playlists you'll love</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <Bottom>
        {covers.map((cover, index) => (
          <PlaylistCard
            url={cover.image}
            metadata={cover.metadata}
            key={index}
          />
        ))}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  padding: 20px;
`;
const Top = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Playlists;
