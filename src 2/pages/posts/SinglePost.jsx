// import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

const SinglePost = () => {

    const { id } = useParams()

    const navigate = useNavigate();

    const [singlePost, setSinglePost] = useState(
        {
            id: " ",
            title: " ",
            content: " ",
            image: " ",
            tags: []
        }
    )

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setSinglePost(res.data))
    }, [id])

    return (
        <>
            <div className="container">
                <div className="card my-3 h-100">
                    <div className="card-body">
                        <h1>Single Post:{id}</h1>
                        <h2>Titolo: {singlePost.title}</h2>
                        <p>Contenuto: {singlePost.content}</p>

                        <ul>
                            {
                                singlePost.tags.map((elem, id) => {
                                    return (
                                        <li key={id}> {elem} </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="btn btn-primary" onClick={() => navigate(-1)}>
                            Torna alla pagina precedente
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePost;