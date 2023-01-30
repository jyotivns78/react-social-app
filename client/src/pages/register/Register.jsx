// import { Link } from "react-router-dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';


const Register = () => {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });
    const [err, setErr] = useState(null);


    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}));

    };

    const handleClick = async e =>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/api/auth/register", inputs)
        }
        catch(err) {
            setErr(err.response.data);
        }
    };

    console.log(err);


    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Be Social</h1>
                    <p>Nulla nostrud laborum sint cupidatat commodo eiusmod,
                       commodo esse mollit est laboris anim nostrud magna.
                       Dolor commodo magna sunt aliqua deserunt quis. 
                       Est reprehenderit in sunt labore proident aute tempor,
                       </p>
                       <span>Do you have a Account ?</span>
                       <Link to='/login'>
                        <button>Login</button>
                       </Link>
                </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='UserName' name='username' onChange={handleChange}/>
                        <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                        <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                        <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                        {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Register;