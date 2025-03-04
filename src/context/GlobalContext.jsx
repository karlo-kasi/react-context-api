import { createContext, useState, useContext } from "react"
import axios from "axios"

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    const [posts, setPosts] = useState([]);

    const [singlePost, setSinglePost] = useState(
        {
            id: " ",
            title: " ",
            content: " ",
            image: " ",
            tags: []
        }
    )

    const fechData = () => {
        axios.get("http://localhost:3000/posts/").then((res) => setPosts(res.data));
    }
        

    const getPostID = (id) => {
        axios.get(`http://localhost:3000/posts/${id}`).then(res => setSinglePost(res.data))
    }

    const value = {
        posts,
        fechData,
        singlePost,
        getPostID
    }
    

    return(
        <GlobalContext.Provider value={ value }>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };