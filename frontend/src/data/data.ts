import { Project } from "../types/types";
import ClearLog from "../assets/images/clear_log.png";
import GoDocGen from "../assets/images/godoc_gen.png";
import AISpotify from "../assets/images/ai_spotify.png";
import CText from "../assets/images/c_text.png";
import MediaPipeController from "../assets/images/mediapipe_controller.png";
import Mystery from "../assets/images/mystery_icon.png";

export const projects: Project[] = [
  {
    title: "Clear - A Talking Programming Language",
    description: "Clear is an interpreted language made in Go. The \"Talking\" aspect of it comes from the log that it produces. This log details every step the program took in turning your code into something that the computer can understand.",
    image: ClearLog,
    link: "https://github.com/ajtroup1/Clear",
  },
  {
    title: "C-Text Code Editor",
    description: "Code editor with necessary functions such as: file editing, workspace architecture, terminal integration, markdown renderer, and more. Powered by Electron Vite.",
    image: CText,
    link: "https://github.com/ajtroup1/C-Text",
  },
  {
    title: "Automatic Go Documentation Generator",
    description: "This project reads specialized comments within your Go source code and generates a robust documentation for it. Leave Doxygen-style comments to give Information to the program.",
    image: GoDocGen,
    link: "https://github.com/ajtroup1/AdamTroup-430-Project",
  },
  {
    title: "AI-Powered Spotify Song Queuer",
    description: "Feeds the user's mood, the current weather in the user's location, and the time of day into an AI model that will automatically queue a song on Spotify relevant to those parameters. For example, on a rainy day when the user is feeling sad and it's night, maybe it would queue blues music.",
    image: AISpotify,
    link: "https://github.com/ajtroup1/AI-Spotify-Recommender",
  },
  {
    title: "AI-Powered computer gesture controller",
    description: "Python-based project that uses Mediapipe to control certain computer functions using the camera and your hands. This is more of an experimantation area for these functions, which include: volume controller, mouse controller, DJ-style Spotify controller, etc.",
    image: MediaPipeController,
    link: "https://github.com/ajtroup1/MediapipeController",
  },
  {
    title: "Not Found! Coming soon...",
    description: "This project is not yet available, but it's very exciting. Check back later!",
    image: Mystery,
    link: "https://random.dog/",
  },
]