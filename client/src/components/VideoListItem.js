import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const VideoListItem = ({ video, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(video)}>
      <Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={2}>
          {video.title}
        </Text>
        <Text style={styles.views}>
          {parseInt(video.viewCount).toLocaleString()} views
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  thumbnail: {
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  views: {
    fontSize: 14,
    color: "#666",
  },
});

export default VideoListItem;
