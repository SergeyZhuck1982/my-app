import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = ({props, number, post, remove}) => {
    return (
        <div className="post">
            <div className="post__Content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={(e=>{remove(post)})}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;