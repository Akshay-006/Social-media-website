import React from 'react'
import {Field,Formik,Form,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/register.css'

function Register() {

    const initialValues = {
        username : "",
        password : "",
        
      };
    
    const validationSchema = Yup.object().shape({
        username : Yup.string().min(3).max(15).required(),
        password : Yup.string().min(8).max(20).required(),
        });

    const onsubmit = (data) => {
        axios.post("http://localhost:3001/auth",data).then(()=>{
            console.log(data);
        }).catch((err) => {
          console.error(err);
        })
    }
    
  return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Join our social community today</p>
                
                <Formik 
                    initialValues={initialValues} 
                    onSubmit={onsubmit} 
                    validationSchema={validationSchema}
                >
                    <Form className='auth-form'>
                        <div className="auth-form-group">
                            <label className="auth-label">Username</label>
                            <Field 
                                className="auth-input"
                                name="username"
                                placeholder="John123"
                                autoComplete="off"
                            />
                            <ErrorMessage name='username' component='span' className="auth-error" />
                        </div>
                        
                        <div className="auth-form-group">
                            <label className="auth-label">Password</label>
                            <Field 
                                className="auth-input"
                                name="password"
                                type="password"
                                placeholder="Create a secure password"
                            />
                            <ErrorMessage name='password' component='span' className="auth-error" />
                        </div>
                        
                        <button type='submit' className="auth-button">Sign Up</button>
                    </Form>
                </Formik>
                
                <div className="auth-divider">
                    <span>or</span>
                </div>
                
                <div className="auth-link">
                    <Link to="/login">Already have an account? Log in</Link>
                </div>
                
                <div className="auth-policy">
                    By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                </div>
            </div>
        </div>
    );
}

export default Register;