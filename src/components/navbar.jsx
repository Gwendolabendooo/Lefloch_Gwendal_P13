import React, { useState, setState } from "react";

import { useNavigate } from 'react-router-dom';

//icons
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiDoorClosed } from '@mdi/js';

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
            <img src={Logo} width="200px" alt="Logo" onClick={() => navigate('/')} />
            <div className="d-flex align-items-center mr-4">
                <div className="text-underline d-flex align-items-center">
                    <Icon path={mdiAccountCircle} color={"black"} size={1}/>
                    {userInfos ?
                        <div className="ml-1 font-weight-bold">
                            {userInfos.firstName}
                        </div> : null
                    }
                </div>
                <span className="ml-1 font-weight-bold text-underline" onClick={() => logOut()}>
                    {userInfos ? <div className="d-flex align-items-center justify-content-between"><Icon path={mdiDoorClosed} color={"black"} size={1}/><div className="ml-1">Sign out</div></div> : "Sign in"}
                </span>
            </div>
        </nav>
    )
  }
  
export default Navbar;