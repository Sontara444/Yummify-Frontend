import React, { useContext, useState } from "react";
import "./CSS/Login.css";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [state, setState] = useState("Sign Up");
  const navigate = useNavigate();
  // isLoggedin, 

  const {backendUrl , setIsLoggedin, getUserData} = useContext(AppContext)

  const handleSubmit = async(e) => {
    try {
      e.preventDefault()
      axios.defaults.withCredentials = true

      if(state === 'Sign Up'){
        const {data} = await axios.post(backendUrl + '/api/auth/register', {name, email, password})

        if(data.success){
          setIsLoggedin(true)
          getUserData()
          navigate('/')
          
        }
        else{
          toast.error(data.message)
        }

      }
      else{
        const {data} = await axios.post(backendUrl + '/api/auth/login', {email, password})

        if(data.success){
          setIsLoggedin(true)
          getUserData()
          navigate('/')
        }
        else{
          toast.error(data.message)
        }
        
      }
    } catch (error) {
      toast.error(error.message)
    }
    
  };

 

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>{state}</h2>
        <button className="cancel-button" onClick={() => navigate("/")}>
          <img src={assets.cross_icon} alt="" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        {state === "Sign Up" ? (
          <input
            type="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        ) : (
          <div></div>
        )}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p className="login-forget-password">
          Forgot Password?
        </p>
        <button>
          {state}
        </button>
      </form>
      {state === "Sign Up" ? (
        <p className="loginsignup-login">
          Already have an account?{" "}
          <span onClick={() => setState("Login")}> Login here</span>
        </p>
      ) : (
        <p className="loginsignup-login">
          Create an account?{" "}
          <span onClick={() => setState("Sign Up")}> Click here</span>
        </p>
      )}

      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
};

export default Login;
