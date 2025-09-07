# Tranquillite - YouTube Video App 🎬

A beautiful React Native mobile application that displays and plays YouTube videos with a simple-themed UI.

![Tranquillite App](https://img.shields.io/badge/React_Native-0.72.6-blue.svg)
![Expo](https://img.shields.io/badge/Expo-5.0.0-lightgrey.svg)
![YouTube API](https://img.shields.io/badge/YouTube_API-v3-red.svg)

## 🎥 Demo Video

📹 [Watch the 2-minute Demo Video](https://drive.google.com/file/d/1UhTctbwjmoFY7-yf7AfJYFtcQ151L2Wu/view?usp=drive_link)

## 🚀 Live Demo

- **Download APK**: [App Link (APK)](https://drive.google.com/file/d/1E1Ib6aVnyK-CwujBpYv_dF0vF0mDhqm5/view?usp=drive_link)
- **Backend API**: `https://yt-api-reactnative-project.onrender.com/api/videos`

## ✨ Features

- 🎨 Beautiful Themed UI with color scheme
- 📺 YouTube video integration with in-app playback
- 🔄 Pull-to-refresh functionality
- ⚡ Smooth navigation between screens
- 🛡️ Comprehensive error handling
- 📱 Responsive design for all Android devices
- 🌐 Custom Node.js backend with MongoDB

## 🛠️ Technology Stack

- **Frontend**: React Native, Expo, React Navigation
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **API**: YouTube Data API v3
- **Deployment**: Render.com (Backend)
- **Testing**: Thunder Client (API Testing)

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app (for testing)

### Steps to Run

1. **Clone the repository**

   ```markdown
   git clone https://github.com/tranquillite-007/YT-Api-ReactNative-Project.git
   cd video-app
   ```

2. **Install dependencies**

   ```markdown
   npm install
   ```

3. **Start the development server**

   ```markdown
   npx expo start
   ```

4. **Run on Android**

- Scan the QR code with Expo Go app, or
- Press 'a' to run on android emulator

**Building for Production**

```markdown
#Build Apk
eas build --platform android --profile preview

# Build app bundle

eas build --platform android --profile production
```

### Environment keys requirements :

```markdown
YOUTUBE_API_KEY=XXXX-XXXX-XXXX
MONGODB_URI=XXXX-XXXX-XXXX
PORT=20000
```

## Api Usage

### Backend API Endpoints

- `GET /api/videos` - Fetch all videos with enriched metadata
- `POST /api/videos` - Add new video ID to database
- `DELETE /api/videos/:id` - Remove video from database

## Acknowledgments

- **YouTube Data API** for providing comprehensive video metadata and streaming capabilities
- **Expo team** for their excellent React Native development tools and continuous support
- **MongoDB Atlas** for offering free database hosting that made this project possible
- **Render.com** for providing free backend hosting services
- **React Navigation team** for seamless navigation solutions
- **React Native community** for extensive documentation and support resources
