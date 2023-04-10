import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Adminlogin.css";

const Adminlogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let login = (e) => {
    e.preventDefault();
    // let data = {email,password} //data from input

    //admin validation
    if (email == "admin@gmail.com" && password == 12345) {
      navigate("/adminportal");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <div className="login">
        <h5>Login as Admin</h5>
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

export default Adminlogin;
