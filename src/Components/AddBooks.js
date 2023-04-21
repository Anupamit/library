import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddBooks.css";
const AddBooks = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [pages, setPage] = useState("");
  let [imageLink, setUrl] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    //data to be posted
    let bookData = {
      title,
      author,
      pages,
      imageLink,
    };
    //posting to server
    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });
    alert("book added successfully");
    navigate("/adminportal/booklist");
  };
  return (
    <div>
      <div className="login">
        <h5>Add Books Details</h5>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="Title of the book"
                className="text"
              />
            </div>
            <div>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="text"
              type="text"
              required
              placeholder="Author of the book"
            />
          </div>
          <div>
            <input
              value={pages}
              onChange={(e) => setPage(e.target.value)}
              className="text"
              type="number"
              required
              placeholder="Page count of the book"
            />
          </div>
          <div>
            <input
              value={imageLink}
              onChange={(e) => setUrl(e.target.value)}
              className="text"
              type="text"
              required
              placeholder="Image of the book"
            />
          </div>
            <button className="btn-a">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
