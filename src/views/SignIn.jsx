import React, { useState, setState, useEffect } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../action';

//icons
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';

//components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

//service
import { login } from '../service'

function Login({ setToken }) { // Modification de la fonction Login pour utiliser setToken fourni par le connect
    //const
    const [identifiants, setIdentifiants] = useState({
        email: '',
        password: ''
    });

    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    // get Data after update state
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== 'null') {
            setToken(token);
            navigate('/UserDetail');
        }
    })

    async function log_in() {
        try {
            const log = await login(identifiants);
            setToken(log);
            if (checked) {
                localStorage.setItem('token', JSON.stringify(log));
            }
            navigate('/UserDetail');
          } catch (error) {
            console.error(error);
          }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        log_in()
    };

    return (
        <div>
            <Navbar/>
            <div className="bg-sign d-flex justify-content-center">
                <div className="mt-4 bg-white p-3">
                    <div className="text-center">
                        <Icon path={mdiAccountCircle} color={"black"} size={1}/>
                    </div>
                    <div className="text-center font-24 font-weight-bold">
                        Sign in
                    </div>
                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        <label htmlFor="username" className="font-weight-bold font-16">
                            Username
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                            className="mb-3"
                            value={identifiants.email}
                            onChange={(event) =>
                                setIdentifiants({
                                    email : event.target.value,
                                    password : identifiants.password
                                })
                            } 
                        />
                        <label htmlFor="password"  className="font-weight-bold font-16">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="mb-3" 
                            value={identifiants.password}
                            onChange={(event) =>
                                setIdentifiants({
                                    email : identifiants.email,
                                    password : event.target.value
                                })
                            } 
                        />
                        <div className="d-flex">
                            <input type="checkbox" name="remember" id="remember" onChange={(e) => e.target.checked ? setChecked(true) : setChecked(false)}/>
                            <label htmlFor="remember"  className="font-16 ml-2">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="w-100 bg-success text-white font-weight-bold font-18 mt-2">Sign in</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapDispatchToProps = {
    setToken
};

export default connect(null, mapDispatchToProps)(Login);