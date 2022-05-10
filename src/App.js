import React, { useRef, useState } from "react";
//import ClassCounter from "./components/ClassCounter";
//import Counter from "./components/Counter";

import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css"

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:"JavaScript - 1", body:"Description"},
        {id:2, title:"JavaScript - 2", body:"Description"},
        {id:3, title:"JavaScript - 3", body:"Description"},
    ]);

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
        setPosts([...posts, newPost])
        setTitle("")
        setBody("")
    }

    

    return (
        <div className="App">
            <form>
                <MyInput 
                    type="text" 
                    value={title} 
                    onChange={e=>setTitle(e.target.value)} 
                    placeholder="Название поста"
                />
                <MyInput 
                    type="text" 
                    value={body} 
                    onChange={e=>setBody(e.target.value)} 
                    placeholder="Описание поста"
                />
                <MyButton 
                    onClick={addNewPost}
                >Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Посты про JS"/>
        </div>
    );
}

export default App;