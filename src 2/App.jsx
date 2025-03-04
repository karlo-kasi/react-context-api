import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/Homepage"
import AboutUs from "./pages/ContactPage"
import Posts from './pages/posts/Posts';
import SinglePost from './pages/posts/SinglePost';


//layouts
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={SinglePost} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
