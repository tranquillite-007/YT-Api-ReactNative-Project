const mongoose = require("mongoose");

const videoIdSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VideoId", videoIdSchema);
