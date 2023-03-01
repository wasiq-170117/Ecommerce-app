import React from 'react'
import Layout from '../../components/Layout/Layout';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            toast.success();
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/login`, 
                {email,password});
                if (res && res.data.success) {
                    toast.success(res.data.message);
                    await setAuth({
                        ...auth,
                        user: res.data.user,
                        token: res.data.token
                    });
                    localStorage.setItem('auth', JSON.stringify(res.data));
                    navigate("/");
                  } else {
                    toast.error(res.data.message);
                  }
            } catch (error) {
                  console.log(error);
                  toast.error("Something went wrong");
            }
    }

    return (
    <Layout title={"Register - Ecommerce App"}>
        <div className='Register'>
            <h4 className = "RegisterTitle">
                Login Form
            </h4>
            <form className='RegistrationForm' onSubmit = {handleSubmit}>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="email" className='RegistrationFormLabel'><FaEnvelope /> Email address</label>
                    <input type="email" value={email} className="form-control mt-3 mr-10" id="email" aria-describedby="emailHelp" placeholder="Enter your Email" style={{marginRight: "10px"}} required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="password" className='RegistrationFormLabel'><FaLock /> Password</label>
                    <input type="password" value = {password} className="form-control mt-3 mr-10" id="password" placeholder="Enter your Password" style={{marginRight: "10px"}} required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='row'>
                    <div className='form-group text-right'>
                        <button type="submit" className="btn btn-primary mt-2 mb-2 float-right">Login</button>
                    </div>
                </div>
                
                
            </form>
        </div>
    </Layout>
    
  )
}

export default Login;