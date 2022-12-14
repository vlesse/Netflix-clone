import React from 'react';
import Nav from "../Nav";
import "../../CSS/ProfileScreen.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from "../../firebase";

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src='https://i.keaimeitu.com/uploads/allimg/20200207/1253247275.jpg' alt='' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen__plans'>
                            <h3>Plans (current Plan: premium)</h3>
                            <button
                                onClick={() => auth.signOut()}
                                className='profileScreen__signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;