import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  // State to track the input value
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  // Handle input changes and trigger typing indicator
  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };

  // Handle form submission (sending messages)
  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    // Clear the input field after sending
    setValue("");
  };

  // Handle file upload
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
