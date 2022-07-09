import "./App.css";
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import ProjectScreen from "./screens/ProjectScreen.js";
import TimelineScreen from "./screens/TimelineScreen.js";
import Homepage from "./screens/homepage";
import Requests from "./screens/requests";
import Education from "./screens/education";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/project" element={<ChakraProvider> <ProjectScreen/></ChakraProvider>}/>
          <Route path="/timeline" element={<ChakraProvider> <TimelineScreen/></ChakraProvider>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
