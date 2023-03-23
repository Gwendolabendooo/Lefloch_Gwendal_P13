import React, { useState, setState } from "react";

import { useNavigate } from 'react-router-dom';

//icons
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

//assets
import Logo from '../assets/argentBankLogo.png'

function Navbar({userInfos}) {
    const navigate = useNavigate();

    async function logOut() {
        try {
            await localStorage.setItem('token', null); 
            navigate('/SignIn');   
        } catch (error) {
            
        }
    }

    return (
        <nav className="p-1 bg-white d-flex justify-content-between align-items-center nav-right">
            <img src={Logo} width="200px" alt="Logo" />
            <div className="d-flex align-items-center mr-4" onClick={() => logOut()}>
                <Icon path={mdiAccountCircle} color={"black"} size={1}/>
                {userInfos ?
                    <div>
                        {userInfos.firstName}
                    </div> : null
                }
                <span className="ml-1 font-weight-bold">
                    {userInfos ? "Sign out" : "Log in"}
                </span>
            </div>
        </nav>
    )
  }
  
export default Navbar;