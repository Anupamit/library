import { useState, useEffect } from "react";
import "../Styles/Userlist.css";

const UserList = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let reponse = await fetch("http://localhost:4000/users");
      let data = await reponse.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  //delete a book from server
  let handleDelete = (id, name) => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "DELETE",
    });
    alert(`${name} will be deleted permanently`);
    // window.location.reload(); // Reload the page after successful delete
  };
  return (
    <div className="userList">
      <h1>User List</h1>
      <div className="usersgroup">
        {users.map((data) => (
          <div className="user">
            <div className="userdata">
              <h2>Name: {data.name}</h2>
              <br />
              <p>Email: {data.email}</p>
              <br />
              <p>Age: {data.age}</p>
              <br />
              <p>Phone Number: {data.phoneNumber}</p>
              <br />
              <div>
                <button
                  className="deletebtn"
                  onClick={() => handleDelete(data.id, data.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
