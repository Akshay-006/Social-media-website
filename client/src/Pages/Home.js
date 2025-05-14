import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import './CSS/Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listOfPosts, setPosts] = useState([]);
    let navigate = useNavigate();



    useEffect (() => {
      axios.get("http://localhost:3001/post/").then((response) => {
        setPosts(response.data);
      });
    }, []);
  
    return (
    <div>
      {listOfPosts.map((value,key) => {
        return <div className='home-post-container' onClick={ () => {
          navigate(`/post/${value.id}`)
        }}
        >
        <div className='post-title'> {value.title} </div>
        <div className='post-content'> {value.posts} </div>
        <div className='post-username'> {value.username} </div>
        <br></br>
        </div>
        
      })}
    </div>);
}

export default Home;