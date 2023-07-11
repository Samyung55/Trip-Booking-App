import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./Onboarding";
import Home from "./Home";
import DestinationDetail from "./DestinationDetail";

export { Onboarding, Home, DestinationDetail };

const Stack = createStackNavigator();

export default function Index() {
  return (
    <>
    <Onboarding />
    </>
  );
}
