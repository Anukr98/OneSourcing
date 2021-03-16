import React, { useEffect, useState } from 'react'
import './login.css'
import './loginMediaQuery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF , faGoogle } from '@fortawesome/free-brands-svg-icons'
import logo from "../../assets/logo.svg"
import register from '../../assets/register.svg'

const Login = () => {

    // const signInButton = document.querySelector('#signin__button')
    // const signUpButton = document.querySelector('#signup__button')
    // const container = document.querySelector('.container')

    const [signInButton, setSignInButton] = useState(undefined)
    const [signUpButton, setSignUpButton] = useState(undefined)
    const [container, setContainer] = useState(undefined)

    const handleSignUpButtonClick = () => {
        console.log('yes',container)
        container.classList.add('signup__mode')
    }

    const handleSignInButtonClick = () => {
        container.classList.remove('signup__mode')
    }

    useEffect( () => {
        setSignInButton(document.querySelector('#signin__button'))
        setSignUpButton(document.querySelector('#signup__button'))
        setContainer(document.querySelector('.container'))
    },[])

    return (
        <div className="container">
            <div className="forms__container">
                <div className="signin__signup">
                    <form action="" className="signin__form">
                        <h2 className="title">Sign In</h2>
                        <div className="input__field">

                            <i className = 'fa fa-user'></i>
                            <input 
                                type = "text"
                                name=""
                                id = ""
                                placeholder = 'Username'
                            />
                        </div>
                        <div className="input__field">
                            <i className = 'fa fa-lock'></i>
                            <input 
                                type = "text"
                                name=""
                                id = ""
                                placeholder = 'Password'
                            />
                        </div>
                        <input type = "submit" value = "Login" className = 'btn solid' />
                        <p className="social__text">Or sign in with social platforms</p>
                        <div className="social__media">
                            <a href="#" className="social__icon">
                                <i className = 'fa fa-facebook-f'></i>
                            </a>
                            <a href="#" className="social__icon">
                                <i className = 'fa fa-google'></i>
                            </a>
                        </div>
                    </form>

                    <form action="" className="signup__form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input__field">

                            <i className = 'fa fa-user'></i>
                            <input 
                                type = "text"
                                name=""
                                id = ""
                                placeholder = 'Username'
                            />
                        </div>
                        <div className="input__field">

                            <i className = 'fa fa-envelope'></i>
                            <input 
                                type = "text"
                                name=""
                                id = ""
                                placeholder = 'Email'
                            />
                        </div>
                        <div className="input__field">
                            <i className = 'fa fa-lock'></i>
                            <input 
                                type = "text"
                                name=""
                                id = ""
                                placeholder = 'Password'
                            />
                        </div>
                        <input type = "submit" value = "Sign Up" className = 'btn solid' />
                        <p className="social__text">Or sign up with social platforms</p>
                        <div className="social__media">
                            <a href="#" className="social__icon">
                                <FontAwesomeIcon icon = {faFacebookF} />
                            </a>
                            <a href="#" className="social__icon">
                                <FontAwesomeIcon icon = {faGoogle} />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels__container">
                <div className="panel left__panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Et quae similique dignissimos est?</p>
                        <button className="btn transparent" id="signup__button" onClick = {handleSignUpButtonClick}>Sign Up</button>
                    </div>
                    <img src={logo} alt="" className = 'image'/>
                </div>
                <div className="panel right__panel">
                    <div className="content">
                        <h3>One of us??</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, animi. Et quae similique dignissimos est?</p>
                        <button className="btn transparent" id="signin__button" onClick = {handleSignInButtonClick}>Sign in</button>
                    </div>
                    <img src={register} alt="" className = 'image'/>
                </div>
            </div>
        </div>
    )
}

export default Login