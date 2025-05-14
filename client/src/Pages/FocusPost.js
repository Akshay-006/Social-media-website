import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import axios from 'axios';
import './CSS/focusPost.css';
function FocusPost() {
    let {id} = useParams();
    const [singlePost , setSinglePost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    useEffect (() => {
      axios.get(`http://localhost:3001/post/byId/${id}`).then((response) => {
        setSinglePost(response.data);
      });

      axios.get(`http://localhost:3001/comment/${id}`).then((response) => {
        setComments(response.data);
      });

    },[]);

    const addNewComment = () => {
      axios
      .post("http://localhost:3001/comment", {
        commentBody: newComment ,
        PostId:id},
      {
        headers : {
          accessToken : sessionStorage.getItem("accessToken")
        }
      })
      .then((response)=>{
        if (response.data.error) alert(response.data.error);
        else{
        const commentToAdd = {commentBody:newComment};
        setComments([...comments, commentToAdd]);
        setNewComment("");
        }
      })
    }

  return (
    <div className='single-post-page'>
      <div className='post-section'>
        <div className='focus-post-container'>
          <div className='post-title'>{singlePost.title}</div>
          <div className='post-content'>{singlePost.posts}</div>
          <div className='post-username'>{singlePost.username}</div>
        </div>
      </div>
      <div className='comments-section'>
        <h2>Comments</h2>
        <div className='listOfComments'>
          {comments.map((comment,key) => {
            return <div key={key} className='comment'>{comment.commentBody} </div>
          })}
        </div>
        <br/>
        <div className='addComment'>
          <input type='text' placeholder='Add a comment ...' value={newComment} autoComplete='off' onChange={(event) => {setNewComment(event.target.value)}}/>
          <button onClick={addNewComment}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default FocusPost