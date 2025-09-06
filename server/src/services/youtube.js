const axios = require("axios");

class YouTubeService {
  constructor() {
    this.apiKey = process.env.YOUTUBE_API_KEY;
    this.baseURL = "https://www.googleapis.com/youtube/v3";
  }

  async getVideoDetails(videoId) {
    try {
      const response = await axios.get(`${this.baseURL}/videos`, {
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoId,
          key: this.apiKey,
        },
      });

      if (response.data.items.length === 0) {
        return null;
      }

      const video = response.data.items[0];
      return {
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        duration: video.contentDetails.duration,
        viewCount: video.statistics.viewCount,
        publishedAt: video.snippet.publishedAt,
      };
    } catch (error) {
      console.error("Error fetching vid. details from YT:", error.message);
      throw new Error("Failed to fetch video details");
    }
  }

  async getVideosDetails(videoIds) {
    try {
      const ids = videoIds.join(",");
      const response = await axios.get(`${this.baseURL}/videos`, {
        params: {
          part: "snippet,contentDetails,statistics",
          id: ids,
          key: this.apiKey,
          maxResults: 50,
        },
      });

      return response.data.items.map((video) => ({
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url,
        duration: video.contentDetails.duration,
        viewCount: video.statistics.viewCount,
        publishedAt: video.snippet.publishedAt,
      }));
    } catch (error) {
      console.error("Error fetching vid. details from YTube:", error.message);
      throw new Error("Failed to fetch videos details");
    }
  }
}

module.exports = new YouTubeService();
