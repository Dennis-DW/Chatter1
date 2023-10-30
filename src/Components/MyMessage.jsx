import React from "react";

const MyMessage = ({ message }) => {
  // Check if the message has attachments (e.g., images)
  if (message.attachments && message.attachments.length > 0) {
    // If attachments are present, display an image message to the right
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  } else {
    // If no attachments, display a text message to the right
    return (
      <div
        className="message"
        style={{
          float: "right",
          marginRight: "18px",
          color: "black", // Set the text color to black
        }}
      >
        {message.text}
      </div>
    );
  }
};

export default MyMessage;
