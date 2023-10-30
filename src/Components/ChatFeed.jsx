import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OthersMessage from "./OthersMessage";

const ChatFeed = (props) => {
  // Destructure props to access necessary data
  const { chats, activeChat, userName, messages } = props;

  // Get the active chat data based on the 'activeChat' prop
  const activeChatData = chats && chats[activeChat];

  // Function to render read receipts for each message
  const renderReadReceipts = (message, isMyMessage) => {
    return activeChatData.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  };

  // Function to render individual messages
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <OthersMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {" "}
            {renderReadReceipts(message, isMyMessage)}{" "}
          </div>
        </div>
      );
    });
  };

  // If active chat data is not available, display "Loading..."
  if (!activeChatData) return "Loading...";

  // Render the chat feed
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{activeChatData.title}</div>
        <div className="chat-subtitle">
          {activeChatData.people
            .map((person) => person.person.username)
            .join(", ")}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

