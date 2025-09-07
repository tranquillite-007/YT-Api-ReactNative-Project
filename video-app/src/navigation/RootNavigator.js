import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import VideoListScreen from "../screens/VideoListScreen";
import VideoPlayerScreen from "../screens/VideoPlayerScreen";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="VideoList"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#D14D72",
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontStyle: "italic",
            fontWeight: "400",
            fontSize: 22,
            letterSpacing: 0.5,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="VideoList"
          component={VideoListScreen}
          options={{
            title: "Tranquillite",
            headerRight: () => (
              <View style={styles.profileContainer}>
                <View style={styles.profile}>
                  <Text style={styles.profileText}>T</Text>
                </View>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerScreen}
          options={{
            title: "Tranquillite",
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

const styles = {
  profileContainer: {
    marginRight: 16,
  },
  profile: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFABAB",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  profileText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
};

export default RootNavigator;
