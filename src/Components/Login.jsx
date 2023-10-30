import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // username & password => chatEngine -->  messages
    // work out => logged in
    // does not workout =>error

    const authObject = {
      "Project-ID": "70260ab7-a258-44cc-ab42-aff56b309a97",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Invalid user credentials provided.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className=" tittle"> Chatter Application</h1>
        <div class="form-container">
          <form class="form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="email">UserName</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                placeholder="Username"
                required
              />
            </div>
            <div class="form-group">
              <label for="textarea">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" class="form-submit-btn">
              Login
            </button>
            <h2 className="error">{error}</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
