import React from 'react'
import './header.css'
import {FaFacebookF} from "react-icons/fa";
import {FaFacebookMessenger} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FaGoogle} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import Button from './button';
import Input from './input'

const Header = () => {
    return(
        <div className='glavni'>
            <div className='div2'>  
                <div>
                    <h1>Login in forma</h1> 
                    <FaFacebookF className='facebook'/>
                    <FaFacebookMessenger className='messenger'/>
                    <BsInstagram className='insta'/>
                    <FaGoogle className='google'/>
                    <AiFillYoutube className='youtube'/>
                </div>
                <div className='logiIN'>
                    <h2>Email</h2>
                    <Input type={'email'}/>
                    <h2>Password</h2>
                    <Input type={'password'}/><br></br>
                <div className='buttonDiv'>
                    <Button text={'Login'} />
                    <Button text={'Cancel'} />
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Header