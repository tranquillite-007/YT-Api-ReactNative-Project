import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { WebView } from "react-native-webview";

const VideoPlayerScreen = ({ route, navigation }) => {
  const { video } = route.params;
  const [hasError, setHasError] = useState(false);

  const getYouTubeEmbedUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`;
  };

  const openInYouTube = () => {
    Linking.openURL(`https://www.youtube.com/watch?v=${video.videoId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
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

      <ScrollView style={styles.infoContainer}>
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{video.title}</Text>
          <View style={styles.channelRow}>
            <Text style={styles.channelName}>YouTube Channel</Text>
          </View>
          <Text style={styles.videoMeta}>
            {parseInt(video.viewCount).toLocaleString()} views •{" "}
            {formatDate(video.publishedAt)}
          </Text>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText} numberOfLines={3}>
            {video.description || "No description available"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF2F4",
  },
  video: {
    width: "100%",
    height: 220,
    backgroundColor: "black",
  },
  infoContainer: {
    flex: 1,
  },
  videoInfo: {
    padding: 14,
    backgroundColor: "white",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    lineHeight: 22,
    color: "#1a1a1a",
  },
  channelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  channelName: {
    fontSize: 14,
    color: "#D14D72",
    fontWeight: "500",
  },
  videoMeta: {
    fontSize: 12,
    color: "#555",
  },
  description: {
    backgroundColor: "white",
    margin: 14,
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  descriptionText: {
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F4",
    padding: 20,
  },
  errorText: {
    color: "#D14D72",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#D14D72",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default VideoPlayerScreen;
