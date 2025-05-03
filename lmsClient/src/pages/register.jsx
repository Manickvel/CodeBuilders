import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './../styles/login.css'
const RegisterPage = () => {
    const navigate =useNavigate()
    const [UserName,setusername] = useState("")
    const [EmailId, setemailid] = useState("")
    const [Password, setpassword] = useState("")
    return(
        <div className="main">
        <div className="container">
            <div className="card">
                <h2 className="content">Sign Up</h2>
                <p className="Text">Create Your Account</p>
                <form className="form">
                <div className="input">
                        <input
                        className="outline-none"
                        type="text"
                        placeholder="Enter your User Name"
                        onChange={(e)=> setusername(e.target.value)}
                        value={UserName}
                        required
                        />
                    </div>
                    <div className="input" >
                        <input
                            className="outline-none"
                            type="email"
                            placeholder="Email Id"
                            onChange={(e) => setemailid(e.target.value)}
                            value={EmailId}
                            required
                        />
                    </div>
                    <div className="input">
                        <input
                            className="outline-none"
                            type="password"
                            placeholder="Enter Your Password"
                            onChange={(e) => setpassword(e.target.value)}
                            value={Password}
                            required
                        />
                    </div>
                <button className="submit">Create Account</button>
                </form>
                
            </div>
            <div className="card card1">
            <h5 className="content">Welcome!</h5>
            <p className="text-center pb-16 pt-2 font-medium text-white">Create an account to start your journey with us.</p>
            <p className="text-center pt-17 pb-2 font-medium text-white">Been here before? Let’s get you back in<br></br><span onClick={()=>navigate('/')} className="cursor-pointer" style={{color:'#4c0082'}} >Sign In here.</span></p>
            </div>
        </div >
        </div>
    );
}
export default RegisterPage