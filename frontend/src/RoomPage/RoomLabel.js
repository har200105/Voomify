import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RoomLabel = ({ roomId }) => {
  const [getLink, setGetLink] = useState(false);
  return (
    <div className="room_label">
      <CopyToClipboard text={`${roomId}`}>
        <button className="link_btn" onClick={() => setGetLink(!getLink)}>
            {!getLink ? (
                <h1>Copy Link</h1>
            ) : (
                <h1>Link Copied</h1>
            )}
        </button>  
      </CopyToClipboard>
      <p className="room_label_paragraph">ID: {roomId} </p>
    </div>
  );
};

export default RoomLabel;
