import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "./GlobalStyles";
import PopularPodcastCard from "./PopularPodcastCard";
import { ScrollView } from "react-native";

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
  {
    image: require("../assets/covers/playlist-4.jpg"),
    metadata: "Featuring Masta, Nga,Prodígio, Yannic Afroman",
  },
  {
    image: require("../assets/covers/playlist-1.jpg"),
    metadata: "An infinite mix of favorites and new tracks",
  },
];

const Playlists = () => {
  return (
    <Wrapper>
      <Top>
        <Label>Popular podcasts</Label>
        <Ionicons name="ios-chevron-forward" size={24} color="black" />
      </Top>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Bottom>
          {covers.map((cover, index) => (
            <PopularPodcastCard
              url={cover.image}
              metadata={cover.metadata}
              key={index}
            />
          ))}
        </Bottom>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  margin: 20px 0;

  /* padding: 20px; */
`;
const Top = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 8px;
`;
const Bottom = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
`;

export default Playlists;
