import './style.sass'
import logo from '../../assets/img/logo.png'
import {BsFillPersonFill, BsFillKeyFill} from 'react-icons/bs'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RequestsClient } from '../../API/RequestsClient';
import { AuthUser } from '../../ViewModel/AuthUser';
import { UserFinded } from '../../ViewModel/UserFinded';
import { HomeContext } from '../../Context/HomeContext';
import Signup from '../../Components/SignUp';


export default function Login() {
    const [credencial, setCredencial] = useState({ email: '', password: '' } as AuthUser);
    const [autenticacaoFalhou, setAutenticacaoFalhou] = useState(false);
    const [signup, setSignUp] = useState(false);
    const navigate = useNavigate();
    // const {setUser} = React.useContext(HomeContext);
    const handleSignup = () => {
        setSignUp (
            !signup
        )
    }
    const logar = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setAutenticacaoFalhou(false);
        RequestsClient.postLogin(credencial)
            .then((res) => {
                if (res) {
                    setAutenticacaoFalhou(false);
                    // setUser(res!);
                    localStorage.setItem('idUser', (res as UserFinded).userId.toString());
                    localStorage.setItem('token', (res as UserFinded).token);
                    // if ((res as UserFinded).userInformation !== null) {
                        navigate('/home');
                    // } else  {
                        // navigate('/questionario');
                    // }
                }
                else
                    setAutenticacaoFalhou(true);
            })
    }

    return (
            <section id='login'>
                <div id="bannerSide">
                </div>
                 <div  id='actionSide'>
                    <div id="header">
                        <label>{signup? 'Já possui uma conta? ' : 'Ainda não possui uma conta?'}</label>
                        <button onClick={handleSignup}>{signup? 'Entrar': 'Crie uma conta'}</button>
                    </div>
{signup?<Signup></Signup>: <div id="core">
                        <div id="logo">
                            <img src={logo}></img>
                        </div>
                        <div id="form">
                            <div className='input'>
                                <label htmlFor='email'></label>
                                <div className='input-icons'>
                                    <BsFillPersonFill className="icon"/>
                                    <input id='email' placeholder="E-mail" onChange={event => setCredencial({ ...credencial, email: event.target.value })}/>
                                </div>
                            </div>
                            <div className='input'>
                                <label htmlFor='password'></label>
                                <div className='input-icons'>
                                    <BsFillKeyFill className="icon"/>
                                    <input  id='password' placeholder="Senha" type='password' onChange={event => setCredencial({ ...credencial, password: event.target.value })}/>
                                </div>
                            </div>
                            {
                            autenticacaoFalhou ?
                                <label className='alert'>E-mail ou senha incorreto!</label>
                                : ''
                            }
                            <button onClick={logar}>Entrar</button>
                            <span>Esqueceu sua senha?</span>
                        </div>
                    </div> }
                </div>
            </section>
    )
}