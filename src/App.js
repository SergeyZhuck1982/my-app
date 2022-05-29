import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import "./styles/App.css"
import PostDetail from "./pages/PostDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/posts">
                            <Route index element={<Posts/>}/>
                            <Route path=":postId" element={<PostDetail/>}/>
                        </Route>
                        <Route path="*" element={<Notfound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;