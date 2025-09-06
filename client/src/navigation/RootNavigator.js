import { createStackNavigator } from "@react-navigation/stack";
import VideoListScreen from "../screens/VideoListScreen";
import VideoPlayerScreen from "../screens/VideoPlayerScreen";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="VideoList">
      <Stack.Screen
        name="VideoList"
        component={VideoListScreen}
        options={{ title: "YouTube Videos" }}
      />
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayerScreen}
        options={{ title: "Now Playing" }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
