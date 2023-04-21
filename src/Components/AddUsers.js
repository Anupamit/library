import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddUser.css";

const AddUsers = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [phoneNumber, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    //data to be posted
    let userData = { name,age, phoneNumber,email, };
    //posting to server
    fetch("https://libraryjson.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    alert("book added successfully");
    navigate("/adminportal/userlist");
  };
  return (
    <div>
      <div className="login">
        <h5>Add User Details</h5>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Name"
                className="text"
              />
            </div>
            <div>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text"
                type="number"
                required
                placeholder="Type Age"
              />
            </div>
            <div>
              <input
                value={phoneNumber}
                onChange={(e) => setNumber(e.target.value)}
                className="text"
                type="number"
                required
                placeholder="Type Mobile Number"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text"
                type="email"
                required
                placeholder="Type Email"
              />
            </div>
            <button className="btn-a">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
