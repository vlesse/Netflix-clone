import React, { useEffect, useState } from 'react';
import '../CSS/Nav.css';
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    onClick={() => history("/")}
                    className='nav__logo'
                    src={logo}
                    alt=""
                />
                <img
                    onClick={() => history("/profile")}
                    className='nav__avatar'
                    src="https://i.keaimeitu.com/uploads/allimg/20200207/1253247275.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav