import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostService } from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostDetail = () => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    let urlParams = useParams();

    const [fetchPostById, isPostsLoading, postError] =  useFetching(async (postId) => {
        let __post = await PostService.getById(postId)
        setPost(__post)
    })

    const [fetchCommentsPostById, isCommentsoading,commentsError] =  useFetching(async (postId) => {
        let __post = await PostService.getCommentsById(postId)
        setComments(__post)
    })


    useEffect( () => {
        fetchPostById(urlParams.postId)
    }, [] )

    useEffect( () => {
        fetchCommentsPostById(urlParams.postId)
    }, [] )
    
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Страница поста #{urlParams.postId}</h1>
            {postError && <h1>Произошла ошибка: {postError}</h1>}
            {isPostsLoading &&
                     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                         <Loader></Loader>
                    </div>
            }

            <table>
                <tbody>
                    <tr><th>userId:</th><td>{post.userId}</td></tr>
                    <tr><th>id:</th><td>{post.id}</td></tr>
                    <tr><th>title:</th><td>{post.title}</td></tr>
                    <tr><th>body:</th><td>{post.body}</td></tr>
                </tbody>
            </table>
            <h2>Комментарии:</h2>
            {
                comments.map ( commentItem => 
                    <div className='comment' key={commentItem.id}>
                        <ul>
                            <li><b>postId:</b>{commentItem.postId}</li>
                            <li><b>id:</b>{commentItem.id}</li>
                            <li><b>name:</b>{commentItem.name}</li>
                            <li><b>email:</b>{commentItem.email}</li>
                            <li><b>body:</b>{commentItem.body}</li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
};

export default PostDetail;