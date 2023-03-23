import React, { useState, setState, useEffect } from "react";

//components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { useNavigate } from 'react-router-dom';


//service
import { UserInfos } from '../service'

function UserDetail() {
    const [userInfos, setUserInfos] = useState({});
    const navigate = useNavigate();

    // get Data after update state
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token !== 'null') {
            getUserInfos(token)
        } else {
            navigate('/SignIn');
        }
    }, [])

    async function getUserInfos(token) {
        try {
            const log = await UserInfos(token);
            setUserInfos(log)
          } catch (error) {
            console.error(error);
        }
    }

    
    return (
        <div>
            <Navbar userInfos={userInfos}/>
            <div className="bg-welcome">
                <div className="welcomeBack">
                    Welcome back <br/>
                    {userInfos.firstName + ' ' + userInfos.lastName + ' !' }
                </div>
                <div className="m-auto text-center mb-3">
                    <button type="submit" className="bg-success text-white font-weight-bold font-18 mt-2">Edit name</button>
                </div>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                    <p class="account-amount">$10,928.42</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                    <p class="account-amount">$10,928.42</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                    <p class="account-amount">$10,928.42</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
  }
  
export default UserDetail;