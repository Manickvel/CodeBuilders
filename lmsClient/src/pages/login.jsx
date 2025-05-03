import { useState } from "react";
import { useNavigate } from "react-router-dom"
import './../styles/login.css'
const LoginPage = () => {
    const navigate =useNavigate()
    const [EmailId, setemailid] = useState("")
    const [Password, setpassword] = useState("")
    // console.log("in login page")
    return(
        <div className="main">
        <div className="container">
            <div className="card">
                <h2 className="content text-white">Sign In</h2>
                <p className="Text text-white">Login To Your Account</p>
                <form className="form">
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
                    <p className="pass">Forget Password ? </p>
                <button className="submit">Sign In</button>
                </form>
                
            </div>
            <div className="card card1">
            <h5 className="content">Welcome Back!</h5>
            <p className="text-center pb-18 pt-2 font-medium text-white">Log in to continue where you left off.</p>
            <p className="text-center pt-14 pb-2 font-medium text-white">No account yet? Let's fix that<br></br><span onClick={()=>navigate('/register')} className="cursor-pointer" style={{color:'#4c0082'}}>Register here.</span></p>
            </div>
        </div >
        </div>
    );
}
export default LoginPage