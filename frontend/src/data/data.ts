import { Project } from "../types/types";
import ClearLog from "../assets/images/clear_log.png";
import GoDocGen from "../assets/images/godoc_gen.png";
import AISpotify from "../assets/images/ai_spotify.png";
import CText from "../assets/images/c_text.png";
import MediaPipeController from "../assets/images/mediapipe_controller.png";
import Mystery from "../assets/images/mystery_icon.png";

const techOptions = {
  go: {
    name: "Go",
    icon: "https://svgicons.com/api/ogimage/?id=190993&n=golang",
    link: "https://go.dev/",
  },
  python: {
    name: "Python",
    icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    link: "https://www.python.org/",
  },
  javascript: {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/512/javascript.png",
    link: "https://www.javascript.com/",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png",
    link: "https://www.typescriptlang.org/",
  },
  react: {
    name: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
    link: "https://reactjs.org/",
  },
  reactNative: {
    name: "React Native",
    icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    link: "https://reactnative.dev/",
  },
  electron: {
    name: "Electron",
    icon: "https://miro.medium.com/max/720/1*GffaeILyTI2xkjWpMLFcCA.png",
    link: "https://www.electronjs.org/",
  },
  tensorflow: {
    name: "Tensorflow",
    icon: "https://static-00.iconduck.com/assets.00/tensorflow-icon-955x1024-hd4xzbqj.png",
    link: "https://www.tensorflow.org/",
  },
  mediapipe: {
    name: "Mediapipe",
    icon: "https://viz.mediapipe.dev/logo.png",
    link: "https://google.github.io/mediapipe/",
  },
  nodejs: {
    name: "Node.js",
    icon: "https://static-00.iconduck.com/assets.00/nodejs-icon-2048x1254-fc24w6ld.png",
    link: "https://nodejs.org/en/",
  },
}

export const projects: Project[] = [
  {
    title: "Clear - A Talking Programming Language",
    description: "An interpreter that translates source code into Go, explaining each step along the way.",
    detail: "Clear is an interpreter written in Go that translates modern source code. It's designed to \"talk\" through every step it takes along the process of Lexing, Parsing, and Interpreting. When a script is ran with the -d or -debug flag, Clear will generate a log of all actions taken to turn your source code into a final result object. Additionally, it will give you back your program's intructions as a structured JSON. These help you see under the hood and gain a deeper understanding of what the interpreter sees as it translates your code into something the computer can understand.",
    image: ClearLog,
    link: "https://github.com/ajtroup1/Clear",
    technologies: [techOptions.go]
  },
  {
    title: "C-Text Code Editor",
    description: "A simple code editor powered by Electron and Monaco.",
    detail: "C-Text is a simple code editor written completely in TypeScript. It uses Electron to run as a native desktop application and Moncaco Editor to actually edit text on the screen. It also has a file browser that allows you to open, save, and even tab multiple files at any time. C-Text also uses a workspace architecture to allow for better workflow and organization. Terminal integration is also available, allowing you to open a terminal in whatever workspace you are currently in.",
    image: CText,
    link: "https://github.com/ajtroup1/C-Text",
    technologies: [techOptions.electron, techOptions.typescript, techOptions.nodejs]
  },
  {
    title: "Automatic Go Documentation Generator",
    description: "Automatically generate documentation for Go code by leaving specialized comments as you code.",
    detail: "This project is a Go program that will let you point to a directory and generate documentation for all Go files in that directory. It uses a specialized comment format to let you specify what you want to be documented (package info, type info, file info, function params/returns, etc.). This is a great way to keep your code documented without having to write the documentation yourself, simply leave comments as you code. Not only will this generate documentation for you algorithmically, but you are also commenting your code in a clean, consistent, and understandable pattern.",
    image: GoDocGen,
    link: "https://github.com/ajtroup1/AdamTroup-430-Project",
    technologies: [techOptions.go]
  },
  {
    title: "AI-Powered Spotify Song Queuer",
    description: "Take the weather, your mood, and the time of day to queue up the perfect Spotify song.",
    detail: "Using Tensorflow AI, the Spotify API, and a Weather API, a model is able to take in a weather condition, a user mood, and a time of day and recommend a relevant song. For example, if it's rainy, you feel sad, and it's night time, maybe the model will throw on some blues music. This project manages to be very impressive and unique while utilizing basic technologies. ",
    image: AISpotify,
    link: "https://github.com/ajtroup1/AI-Spotify-Recommender",
    technologies: [techOptions.python, techOptions.tensorflow, techOptions.react]
  },
  {
    title: "AI-Powered computer gesture controller",
    description: "Control your computer with hand gestures using MediaPipe and OpenCV.",
    detail: "This project leverages computer vision to allow the camera to recognize hand gestures and positioning. With this information, you can do a lot of creative things such as: volume and hardware control, Spotify DJ via motion controls, and even a virtual mouse. This repo is also just a workspace for any computer vision experiments that I do.",
    image: MediaPipeController,
    link: "https://github.com/ajtroup1/MediapipeController",
    technologies: [techOptions.python, techOptions.mediapipe]
  },
  {
    title: "Not Found! Coming soon...",
    description: "This project is not yet available, but it's very exciting. Check back later!",
    detail: "",
    image: Mystery,
    link: "https://random.dog/",
  },
]