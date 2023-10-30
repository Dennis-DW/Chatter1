import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./Components/ChatFeed";
import Login from "./Components/Login";

function App() {
  // Check if a username is stored in local storage, if not, display the Login component
  if (!localStorage.getItem("username")) return <Login />;
  
  // If a username is stored in local storage, render the ChatEngine component
  return (
    <ChatEngine
      height="100vh"
      projectID="70260ab7-a258-44cc-ab42-aff56b309a97"
      userName={localStorage.getItem("username")} // Retrieve the username from local storage
      userSecret={localStorage.getItem("password")} // Retrieve the user secret from local storage
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} // Render the ChatFeed component
    />
  );
}

export default App;

