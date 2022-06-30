import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";

import "./JoinRoomPage.css";

const JoinRoomPage = () => {
  
  // console.log(useSelector(state));
  const { isRoomHost } = useSelector((state) => state);
  console.log(isRoomHost);
  const dispatch = useDispatch();

  const {search} = useLocation();

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      dispatch(setIsRoomHost(true));
    }
  }, [isRoomHost,dispatch]);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
};


export default JoinRoomPage;
