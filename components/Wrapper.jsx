import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { Container } from "./GlobalStyles";

const Wrapper = ({ children }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar animated />
      <Container>{children}</Container>
    </ScrollView>
  );
};

export default Wrapper;
