import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import SmallButton from "./SmallButton";
const images = [
  require("../assets/covers/artist-1.jpg"),
  require("../assets/covers/artist-2.jpg"),
  require("../assets/covers/artist-3.jpg"),
  require("../assets/covers/artist-4.jpg"),
  require("../assets/covers/cover-2.jpg"),
];
const Recomendations = () => {
  return (
    <Wrapper>
      <Top>
        <SmallLabel>
          Improve your recommendation by selecting your favorite artists
        </SmallLabel>
      </Top>
      <Bottom>
        <ImageList>
          {images.map((image, index) => (
            <Artist
              source={image}
              key={index}
              style={
                index === 0 || index === images.length - 1
                  ? {
                      width: 45,
                      height: 45,
                    }
                  : index === 1 || index === images.length - 2
                  ? {
                      width: 70,
                      height: 67,
                      zIndex: 4,
                    }
                  : {
                      width: 100,
                      height: 100,
                      zIndex: 12,
                    }
              }
            />
          ))}
        </ImageList>
        <SmallButton title="Add artists" />
      </Bottom>
    </Wrapper>
  );
};

const Artist = styled.Image`
  height: 60px;
  width: 60px;
  position: relative;
  margin-right: -8px;
  border-radius: 80px;
`;
const ImageList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.View`
  padding: 20px;
`;
const SmallLabel = styled.Text`
  font-size: 13px;
  font-family: "Poppins_400Regular";
  text-align: center;
  color: #72727d;
`;
const Top = styled.View`
  margin-bottom: 20px;
`;
const Bottom = styled.View`
  justify-content: center;
  align-items: center;
`;

export default Recomendations;
