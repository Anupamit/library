import { useState } from "react";
import "../Styles/Adminlogin.css";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let login = (e) => {
    e.preventDefault();
    if (email == "admin@gmail.com" && password == 12345) {
      navigate("/userportal");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <div className="login">
        <h5>Login as User</h5>
        <div>
          <form onSubmit={login}>
            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="text"
              />
            </div>
            <div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="text"
              />
            </div>
            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
