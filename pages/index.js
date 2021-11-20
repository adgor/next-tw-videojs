import { useEffect, useRef } from "react";
import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import "@videojs/themes/dist/forest/index.css";

import ReactPlayer from "react-player";

// Render a YouTube video player

export default function IndexPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: "https://tv2.abcnews.al/live/abcnews/playlist.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      });
    }
  });

  return (
    <main className="items-center w-full px-20 text-center ">
      <div className="max-w-4xl my-6 sm:w-full">
        <h2 className="my-6 ">Hello World.</h2>
        <video controls ref={videoRef} className="video-js vjs-theme-forest" />
      </div>
      <ReactPlayer
        controls
        url="https://tv2.abcnews.al/live/abcnews/playlist.m3u8"
      />
    </main>
  );
}
