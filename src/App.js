import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ProjectScreen from "./screens/ProjectScreen.js";

function App() {
  return (
    <ChakraProvider>
      <ProjectScreen />
    </ChakraProvider>
  );
}

export default App;
