import React from 'react'
import Layout from '../../components/Layout/Layout';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            toast.success();
            const res = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/register`, 
                {name,email,password,phone,address});
                
                console.log(res.data.success);

                if (res && res.data.success) {
                    toast.success(res.data.message);
                    navigate("/login");
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
                Register Form
            </h4>
            <form className='RegistrationForm' onSubmit = {handleSubmit}>
                <div className="form-group col-lg-12 mb-2">
                    <label htmlFor="username" className='RegistrationFormLabel'><FaUser /> Name</label>
                    <input type="text" value={name} className="form-control mt-3 mr-10" id="username" placeholder="Enter Your Name" style={{marginRight: "10px"}} required autoFocus onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="email" className='RegistrationFormLabel'><FaEnvelope /> Email address</label>
                    <input type="email" value={email} className="form-control mt-3 mr-10" id="email" aria-describedby="emailHelp" placeholder="Enter your Email" style={{marginRight: "10px"}} required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="password" className='RegistrationFormLabel'><FaLock /> Password</label>
                    <input type="password" value = {password} className="form-control mt-3 mr-10" id="password" placeholder="Enter your Password" style={{marginRight: "10px"}} required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="username" className='RegistrationFormLabel'><FaPhone /> Phone No.</label>
                    <input type="text" value = {phone} className="form-control mt-3 mr-10" id="phoneNo" placeholder="Enter Your Phone No." style={{marginRight: "10px"}} required onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="form-group mb-2 col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="username" className='RegistrationFormLabel'><FaMapMarkedAlt /> Address</label>
                    <input type="text" value = {address} className="form-control mt-3 mr-10" id="address" placeholder="Enter Your Address" style={{marginRight: "10px"}} required onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='row'>
                    <div className='form-group text-right'>
                        <button type="submit" className="btn btn-primary mt-2 mb-2 float-right">Register</button>
                    </div>
                </div>
                
                
            </form>
        </div>
    </Layout>
    
  )
}

export default Register;