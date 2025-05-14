import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './CSS/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let navigate = useNavigate();

    const login = () => {

        if (!username || !password){
          setError("Please enter both username and password !");
          return;
        }

        const data = {username : username , password : password};
        axios.post("http://localhost:3001/auth/login",data).then((response) => {
            if (response.data.error) alert(response.data.error);
            else{
              sessionStorage.setItem("accessToken", response.data);
              navigate('/');
            }

        })
      
    }

      return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Login</h1>
                
                {error && <div className="auth-error">{error}</div>}
                
                <div className="auth-form">
                    <input 
                        type="text" 
                        className="auth-input" 
                        placeholder="Username"
                        value={username}
                        onChange={(event) => { setUsername(event.target.value) }}
                    />
                    
                    <input 
                        type="password" 
                        className="auth-input" 
                        placeholder="Password"
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                    
                    <button className="auth-button" onClick={login}>
                        Log In
                    </button>
                </div>
                
                <div className="auth-divider">
                    <span>or</span>
                </div>
                
                <div className="auth-link">
                    <Link to="/register">Don't have an account? Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;