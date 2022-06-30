import React from "react";
import { useDispatch } from "react-redux";
import CheckImg from "../resources/images/check.png";
import { setConnectOnlyWithAudio } from "../store/actions";

const OnlyWithAudioCheckbox = ({
  connectOnlyWithAudio,
}) => {

  const dispatch = useDispatch();

  const handleConnectionTypeChange = () => {
     dispatch(setConnectOnlyWithAudio(!connectOnlyWithAudio))
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" src={CheckImg}></img>
        )}
      </div>
      <p className="checkbox_container_paragraph">Only audio</p>
    </div>
  );
};

export default OnlyWithAudioCheckbox;
