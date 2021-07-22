import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const SmallButton = ({ title }) => {
  return (
    <TouchableOpacity>
      <Button>
        <ButtonText>{title}</ButtonText>
      </Button>
    </TouchableOpacity>
  );
};

const Button = styled.View`
  padding: 12px;
  width: 150px;
  background-color: #ef5466;
  border-radius: 30px;
  margin-top: 10px;
`;
const ButtonText = styled.Text`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Poppins_400Regular";
  color: #ffff;
`;
export default SmallButton;
