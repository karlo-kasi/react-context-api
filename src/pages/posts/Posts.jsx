import { NavLink } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

import {useEffect} from "react"
import { useGlobalContext } from '../../context/GlobalContext';

const Posts = () => {

    // const [posts, setPosts] = useState([]);
    const { posts, fechData } = useGlobalContext()

    useEffect(() => {
        // axios.get("http://localhost:3000/posts/")
        //     .then((res) => setPosts(res.data));
        fechData()

    }, []);

    return (
        <>
            <main className="viewport">
                <div className="container">
                    <div className="row">
                        {posts.map((elem) => {
                            const {id, title, image, content} = elem
                            return (
                                <div key={id} className="col-4">
                                    <NavLink to={`/posts/${id}`}>
                                        <div className="card my-3">
                                            <div className="card-body">
                                                <img src={image} alt={title} />
                                                <h4 className="card-title">{title}</h4>
                                                <p className="card-text">{content}</p>
                                                <button className="btn btn-primary">Seleziona</button>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Posts;