import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = ({props, number, post, remove}) => {

    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__Content">
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={(e=>{navigate(`/posts/${post.id}`)})}>Открыть</MyButton>
                <MyButton onClick={(e=>{remove(post)})}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;