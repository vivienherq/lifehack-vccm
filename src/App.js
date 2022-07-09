import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProjectScreen from "./screens/ProjectScreen.js";
import TimelineScreen from "./screens/TimelineScreen.js";

function App() {
  return (
    <ChakraProvider>
      <TimelineScreen />
    </ChakraProvider>
  );
}

export default App;
