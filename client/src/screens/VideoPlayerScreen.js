import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

const VideoPlayerScreen = ({ route }) => {
  const { video } = route.params;
  const [hasError, setHasError] = useState(false);

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const openInYouTube = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${video.videoId}`);
  };

  if (hasError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load video</Text>
        <TouchableOpacity style={styles.button} onPress={openInYouTube}>
          <Text style={styles.buttonText}>Open in YouTube App</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        style={styles.video}
        source={{ uri: getYouTubeEmbedUrl(video.videoId) }}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onError={() => setHasError(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  errorText: {
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default VideoPlayerScreen;
