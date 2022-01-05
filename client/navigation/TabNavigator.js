import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  FollowedStackNavigator,
  AccountStackNavigator,
} from "./StackNavigation";
import { UserContext } from "../contexts/UserContext";
import { Feather } from "@expo/vector-icons";
import CreateAnimalProfileScreen from "../screens/CreateAnimalProfileScreen";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const userCtx = useContext(UserContext);

  useEffect(() => {}, [userCtx]);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "#362893",
        style: { height: 55, paddingBottom: 5 },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "Start",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="messages" component={MessageStackNavigator} */}
      {userCtx.userData.isShelter ? (
        <Tab.Screen
          name="add"
          component={CreateAnimalProfileScreen}
          options={{
            tabBarLabel: "Dodaj",
            tabBarIcon: ({ color, size }) => (
              <Feather name="plus" color={color} size={size} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="followed"
          component={FollowedStackNavigator}
          options={{
            tabBarLabel: "Ulubione",
            tabBarIcon: ({ color, size }) => (
              <Feather name="heart" color={color} size={size} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="account"
        component={AccountStackNavigator}
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
