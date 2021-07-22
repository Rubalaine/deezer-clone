import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import Home from "./screens/Home";
import Favorites from "./screens/Favorites";
import Podcasts from "./screens/Podcasts";
import Search from "./screens/Search";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const App = () => {
  const [fonstLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (fonstLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Music")
                iconName = focused
                  ? "ios-musical-notes"
                  : "ios-musical-notes-outline";
              else if (route.name === "Podcasts")
                iconName = focused ? "ios-mic" : "ios-mic-outline";
              else if (route.name === "Favorites")
                iconName = focused ? "ios-heart" : "ios-heart-outline";
              else if (route.name === "Search")
                iconName = focused
                  ? "ios-search-outline"
                  : "ios-search-outline";

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#000",
            inactiveTintColor: "#72727d",
            style: {
              height: 60,
              paddingVertical: 10,
            },
            labelStyle: {
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
            },
          }}
        >
          <Tab.Screen name="Music" component={Home} />
          <Tab.Screen name="Podcasts" component={Podcasts} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else return <AppLoading />;
};

export default App;
