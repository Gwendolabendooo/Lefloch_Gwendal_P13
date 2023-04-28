import React, { useState, setState, useEffect } from "react";
import { connect } from 'react-redux';

//components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import { useNavigate } from 'react-router-dom';


//service
import { UserInfos, editUser } from '../service'

const mapStateToProps = (state) => ({
    token: state.token,
    });

function UserDetail({token}) {
    const [userInfos, setUserInfos] = useState({});
    const [editName, setEditName] = useState(false);
    const navigate = useNavigate();
    const [newToken, setNewToken] = useState(null);

    //const
    const [identifiants, setIdentifiants] = useState({
        email: '',
        password: ''
    })

    // get Data after update state
    useEffect(() => {
        if (token == null) {
            if (JSON.parse(localStorage.getItem('token')) != null) {
                token = JSON.parse(localStorage.getItem('token'));
                setNewToken(token)
                getUserInfos(token)   
            } else {
                navigate('/SignIn');
            }
        } else {
            setNewToken(token)
            getUserInfos(token)
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

    async function EditUserInfos(token) {
        try {
            await editUser(identifiants, token);
            setUserInfos(identifiants)
            setEditName(false)
          } catch (error) {
            console.error(error);
        }
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        EditUserInfos(newToken)
    };

    return (
        <div>
            <Navbar userInfos={userInfos}/>
            <div className="bg-welcome">
                <div className="welcomeBack">
                    Welcome back <br/>
                    {userInfos.firstName + ' ' + userInfos.lastName + ' !' }
                </div>
                <div className="m-auto text-center mb-3">
                    <button type="submit" className="bg-success text-white font-weight-bold font-18 mt-2" onClick={() => setEditName(true)}>Edit name</button>
                </div>
                {editName ? 
                    <form onSubmit={handleSubmit} className="d-flex flex-column formEdit">
                        <label htmlFor="username" className="font-weight-bold font-16">
                            New firstName
                        </label>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            className="mb-3"
                            value={identifiants.firstName}
                            onChange={(event) =>
                                setIdentifiants({
                                    firstName : event.target.value,
                                    lastName : identifiants.lastName
                                })
                            } 
                        />
                        <label className="font-weight-bold font-16">
                            New lastName
                        </label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            className="mb-3" 
                            value={identifiants.lastName}
                            onChange={(event) =>
                                setIdentifiants({
                                    firstName : identifiants.firstName,
                                    lastName : event.target.value
                                })
                            } 
                        />
                        <button type="submit" className="w-100 bg-success text-white font-weight-bold font-18 mt-2">Change infos</button>
                    </form> 
                : null}
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
  }
  
export default connect(mapStateToProps)(UserDetail);