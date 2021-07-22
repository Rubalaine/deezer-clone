import React, { Component } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import FavoritesList from "../components/FavoritesList";
import ForYou from "../components/ForYou";
import { Container } from "../components/GlobalStyles";
import Header from "../components/Header";
import MightLove from "../components/MightLove";
import Playlists from "../components/Playlists";
import Recomendations from "../components/Recomendations";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Header name="Music" />
      <FavoritesList />
      <ForYou />
      <Recomendations />
      <Playlists />
      <MightLove />
    </Wrapper>
  );
};

export default Home;
