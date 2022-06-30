import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveConversation } from "../../store/actions";

const SingleParticipant = (props) => {
  const {
    identity,
    lastItem,
    participant,
    socketId,
  } = props;

  const dispatch = useDispatch();

  const handleOpenActiveChatbox = () => {
    if (participant.socketId !== socketId) {
      dispatch(setActiveConversation(participant));
    }
  };

  return (
    <>
      <p className="participants_paragraph" onClick={handleOpenActiveChatbox}>
        {identity}
      </p>
      {!lastItem && <span className="participants_separator_line"></span>}
    </>
  );
};

const Participants = () => {
  const { participants,socketId } = useSelector((state) => state);
  return (
    <div className="participants_container">
      {participants.map((participant, index) => {
        return (
          <SingleParticipant
            key={participant.identity}
            lastItem={participants.length === index + 1}
            participant={participant}
            identity={participant.identity}
            socketId={socketId}
          />
        );
      })}
    </div>
  );
};

export default Participants;
