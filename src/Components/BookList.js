import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/BookList.css";

const BookList = () => {
  let [books, setBooks] = useState([]);

  //to fetch the route value
  let location = useLocation();

  useEffect(() => {
    let fetchData = async () => {
      let reponse = await fetch("http://localhost:4000/books");
      let data = await reponse.json();
      setBooks(data);
    };
    fetchData();
  }, []);

  let navigate = useNavigate();
  let handleRead = (id) => {
    if (location.pathname == "/adminportal/booklist") {
      navigate(`/adminportal/booklist/${id}`);
    } else {
      navigate(`/userportal/booklist/${id}`);
    }
  };
   //delete a book from server
  let handleDelete = (id, title) => {
    fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
    });
    alert(`${title} will be deleted permanently`);
    window.location.reload(); // Reload the page after successful delete
  };
  return (
    <div id="large-th">
      <div class="container">
        <h1> A list of books : {books.length}</h1>
        <br />
        <div id="list-th">
          {books.map((data) => (
            <div class="book">
              <div class="cover">
                <img src={data.imageLink} alt="imgerr" onClick={()=>handleRead(data.id)}/>
              </div>
              <div class="description">
                <p class="title">
                {data.title}
                  <br />
                  <span class="author">Written by: {data.author}</span>
                </p>
              </div>
              <div className="deletebtn">
                {location.pathname == "/adminportal/booklist" && (
                  <button
                    onClick={() => handleDelete(data.id, data.title)}
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
