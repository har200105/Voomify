import React, { useEffect } from "react";
import ConnectingButtons from "./ConnectingButtons";
import { useDispatch } from "react-redux";
import { setIsRoomHost } from "../store/actions";

import "./IntroductionPage.css";

const IntroductionPage = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(setIsRoomHost(false))
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <h1 className="header_text">Welcome to Voomify</h1>
        <ConnectingButtons />
      </div>
    </div>
  );
};

export default IntroductionPage;
