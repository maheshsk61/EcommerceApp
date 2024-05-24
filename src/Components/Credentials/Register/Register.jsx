import React from "react";
import { useState } from "react";
import './Register.css'
const Register = () => {
    const passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{4,}$/
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pwd,setPwd]=useState('')
    const [pwd1,setPwd1]=useState('')
    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorEmailSymbol, setErrorEmailSymbol] = useState(false)
    const [errorPwd, setErrorPwd] = useState(false)
    const [pwdRegex,setPwdRegex]=useState(false)
    const [matchPwd,setMatchPwd]=useState(false)
    function handleRegisterValidation(e){
        e.preventDefault()
        if(!name.trim()){
            setErrorName('Please enter a name')
            return false
        }
        setErrorName(false)
        if(!email.trim()){
            setErrorEmail('Please enter an email')
            return false
        }
        setErrorEmail(false)
        if (!email.trim().includes("@")) {
            setErrorEmailSymbol('Email must have @ symbol')
            return false
        }
        setErrorEmailSymbol(false)
        if (!pwd.trim()) {
            setErrorPwd('please enter your password')
            return false
        }
        setErrorPwd(false)
        if(!passwordRegex.test(pwd)){
            setPwdRegex('Password must contain atleast one Upper & lowercase, number & symbol')
            return false
        }
        setPwdRegex(false)
        if(pwd!==pwd1){
            setMatchPwd('Password does not match')
            return false
        }
        setMatchPwd(false)
        return true
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="col-xs-6 col-md-4">
                        <form onSubmit={handleRegisterValidation}>
                            <div className="NameFromRegister d-flex flex-column">
                                <label for='name'><b>Name</b></label>
                                <input type='text' placeholder='Enter your name' id='name' className="box" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="Error">
                                <div className='text-danger'>{errorName && errorName}</div>
                            </div>
                            <div className='EmailFromRegister d-flex flex-column'>
                                <label for='email'><b>Email </b></label>
                                <input type="text" placeholder="Enter your email" id="email" className='box' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="Error">
                                <div className='text-danger'>{errorEmail && errorEmail}{errorEmailSymbol && errorEmailSymbol}</div>
                            </div>
                            <div className="PasswordFromRegister d-flex flex-column">
                                <label for='password'><b>Create Password </b></label>
                                <input type="password" placeholder="Enter your password" id="password" className='box' value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/>
                                <label for='password'><b>Confirm Password </b></label>
                                <input type="password" placeholder="Enter your password" id="password" className='box' value={pwd1} onChange={(e)=>{setPwd1(e.target.value)}}/>
                            </div>
                            <div className="Error">
                                <div className='text-danger'>{errorPwd && errorPwd}{pwdRegex && pwdRegex}{matchPwd && matchPwd}</div>
                            </div>
                            <div className="Login text-center">
                                <button type='submit' className='btn btn-primary shadow-none'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register