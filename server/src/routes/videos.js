const express = require("express");
const VideoId = require("../models/VideoId");
const youtubeService = require("../services/youtube");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const videoIds = await VideoId.find().select("videoId -_id");
    const idList = videoIds.map((v) => v.videoId);

    if (idList.length === 0) {
      return res.json([]);
    }

    const videos = await youtubeService.getVideosDetails(idList);

    res.json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { videoId } = req.body;

    if (!videoId) {
      return res.status(400).json({ error: "Video ID is required" });
    }

    const videoDetails = await youtubeService.getVideoDetails(videoId);
    if (!videoDetails) {
      return res.status(400).json({ error: "Invalid YouTube video ID" });
    }

    const newVideoId = new VideoId({ videoId });
    await newVideoId.save();

    res.status(201).json(videoDetails);
  } catch (error) {
    console.error("Error adding video:", error.message);
    if (error.code === 11000) {
      res.status(400).json({ error: "Video ID already exists" });
    } else {
      res.status(500).json({ error: "Failed to add video" });
    }
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await VideoId.findOneAndDelete({ videoId: id });

    if (!result) {
      return res.status(404).json({ error: "Video ID not found" });
    }

    res.json({ message: "Video ID deleted successfully" });
  } catch (error) {
    console.error("Error deleting video:", error.message);
    res.status(500).json({ error: "Failed to delete video" });
  }
});

module.exports = router;
