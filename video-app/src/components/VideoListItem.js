import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const VideoListItem = ({ video, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(video)}>
      <View style={styles.thumbnailWrapper}>
        <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
        <View style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle} numberOfLines={2}>
          {video.title}
        </Text>
        <Text style={styles.channel}>YouTube Video</Text>
        <Text style={styles.views}>
          {parseInt(video.viewCount).toLocaleString()} views
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  thumbnailWrapper: {
    position: "relative",
  },
  thumbnail: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  playButton: {
    position: "absolute",
    bottom: -18,
    right: 16,
    backgroundColor: "#D14D72",
    borderRadius: 22,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  playIcon: {
    color: "white",
    fontSize: 18,
    marginLeft: 2,
  },
  videoInfo: {
    padding: 12,
    paddingTop: 30,
  },
  videoTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 6,
    lineHeight: 20,
    color: "#1a1a1a",
  },
  channel: {
    fontSize: 13,
    color: "#D14D72",
    marginBottom: 4,
    fontWeight: "500",
  },
  views: {
    fontSize: 11,
    color: "#555",
    fontWeight: "400",
  },
});

export default VideoListItem;
