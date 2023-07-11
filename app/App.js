import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, DestinationDetail } from "./";
import Tabs from "./navigation/tabs";
import { icons, COLORS, SIZES } from '../constants';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        // Add your custom fonts here
    });

    if (!loaded) {
        return null;
    }

    return (
        <Stack.Navigator>
            {/* Screens */}
            <Stack.Screen
                name="Onboarding"
                component={Onboarding}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: COLORS.white
                    },
                    headerLeft: null,
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding }}
                            onPress={() => console.log("Pressed")}
                        >
                            <Image
                                source={icons.barMenu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

            <Stack.Screen
                name="DestinationDetail"
                component={DestinationDetail}
                options={{ headerShown: false }}
            />

            {/* Tabs */}
            <Stack.Screen
                name="Home"
                component={Tabs}
                options={{
                    title: null,
                    headerStyle: {
                        backgroundColor: COLORS.white
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.padding }}
                            onPress={onPress}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding }}
                            onPress={() => console.log("Menu")}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default function Index() {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    );
}
