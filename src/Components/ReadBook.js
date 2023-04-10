import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/ReadBook.css"

const ReadBook = () => {
    let [book, setBook] = useState([])

    //to get route parameter
    let params = useParams()
    console.log(params);
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchData()
    }, [params.id])
    return (
        <div className="readBook">
            <div className="card">
                <h2 className="title">{book.title}</h2>
                <div className="card-footer">
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ReadBook;
