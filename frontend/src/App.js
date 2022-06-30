import React, { useEffect } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import JoinRoomPage from "./JoinRoomPage/JoinRoomPage";
import RoomPage from "./RoomPage/RoomPage";
import { connectWithSocketIOServer } from "./utils/wss";
import "./App.css";

const App = () => {
  
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/join-room" element={<JoinRoomPage />}/>
        <Route path="/room" element={<RoomPage />} />
        <Route path="/"  element={<IntroductionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
