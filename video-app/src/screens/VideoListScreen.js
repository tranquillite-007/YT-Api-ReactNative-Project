import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import api from "../api/http";
import VideoListItem from "../components/VideoListItem";

const VideoListScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setError(null);
      const response = await api.get("/videos");
      setVideos(response.data);
    } catch (err) {
      setError(
        err.message || "Failed to load videos. Please check your connection."
      );
      console.error("Error fetching videos:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchVideos();
  };

  const handleVideoPress = (video) => {
    navigation.navigate("VideoPlayer", { video });
  };

  const retryFetch = () => {
    setLoading(true);
    setError(null);
    fetchVideos();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#D14D72" />
        <Text style={styles.loadingText}>Loading tranquil videos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={retryFetch}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.videoId}
        renderItem={({ item }) => (
          <VideoListItem video={item} onPress={handleVideoPress} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#D14D72"]}
          />
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF2F4",
  },
  listContent: {
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FEF2F4",
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
  error: {
    color: "#D14D72",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "500",
  },
  retryButton: {
    backgroundColor: "#D14D72",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  retryButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default VideoListScreen;
