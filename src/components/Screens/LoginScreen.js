import React, { useState } from 'react';
import '../../CSS/LoginScreen.css';
import logo from '../../assets/logo.png';
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='loginScreen__background'>
                <img
                    className='loginScreen__logo'
                    src={logo} alt=''
                />
                <button onClick={() => setSignIn(true)} className='loginScreen_button'>
                    Sign In
                </button>

                <div className='loginScreen__gradient' />
            </div>

            <div className='loginScreen__body'>
                {signIn ? (
                    <SignupScreen />
                ) : (
                    <>
                        <h1>人人影视</h1>
                        <h2>这里是神秘并且自由的开放社区</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginScreen__input'>
                            <form>
                                <input
                                    type="email" placeholder='Email Address'
                                />
                                <button
                                    onClick={() => setSignIn(true)}
                                    className='loginScreen__getStarted'>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LoginScreen