import React, { useState, useMemo } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";



import "./styles/App.css"

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:"bbbs", body:"555"},
        {id:2, title:"ssss", body:"3333"},
        {id:3, title:"ddddb", body:"4444"},
    ]);
    
   const [filter, setFilter] = useState({sort:"", query:""})
    

    const sortedPosts = useMemo(()=>{
        return filter.sort 
            ? [...posts].sort((a,b) => {return a[filter.sort].localeCompare(b[filter.sort])})
            : posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin:"15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        </div>
    );
}

export default App;