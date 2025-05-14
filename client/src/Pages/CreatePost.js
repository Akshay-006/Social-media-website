import React from 'react'
import {Field,Formik,Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import './CSS/createPost.css';
import {useNavigate} from 'react-router-dom';

function CreatePost() {


  const initialValues = {
    title : "",
    posts : "",
    username : "",
    
  };

  const validationSchema = Yup.object().shape({
    title : Yup.string().required("Title is a mandatory field"),
    posts : Yup.string().required(),
    username : Yup.string().min(3).max(15).required(),
  });
  let navigate = useNavigate();
  const onsubmit = (data) => {
    axios.post("http://localhost:3001/post/", data).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className='form-wrapper'>
      <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema}>
        <Form className='create-post-form'>
          <label>Title :</label>
          <br/>
          
          <ErrorMessage name='title' component='span'/>
          <br/>
          
          <Field 
            id="inputCreatePost"
            name="title"
            placeholder="Ex : First post"
            autocomplete = "off"
          />
          <br/>
          <br/>
          <label>Post :</label>
          <br/>
          
          <ErrorMessage name='posts' component='span'/>
          <br/>
          
          <Field 
            id="inputCreatePost"
            name="posts"
            placeholder="Ex : This is my First post"
          />
          <br/>
          <br/>
          <label>UserName :</label>
          <br/>
          
          <ErrorMessage name='username' component='span'/>
          <br/>
          
          <Field 
            id="inputCreatePost"
            name="username"
            placeholder="Ex : Akshay_006"
            autocomplete= "off"
          />
          <br/>
          <br/>
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>


    </div>
  )
}

export default CreatePost;