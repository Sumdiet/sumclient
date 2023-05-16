import './style.sass';
import logo from '../../assets/img/logo.png';
import { BsFillPersonFill, BsFillKeyFill } from 'react-icons/bs';
import React, { useState } from 'react';
import axios from 'axios';
import { RequestsClient } from '../../API/RequestsClient';
import CreateUser from '../../ViewModel/CreateUser';
import { useNavigate } from 'react-router-dom';

interface CreateUserModel {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}
const SignUp = () => {
  const BASE_URL = 'https://localhost:44337';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  } as CreateUserModel);

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(''); 
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('As senhas não correspondem.');
      return;
    }

    try {
      const user: CreateUser = {email: formData.email, username: formData.name, password: formData.password}
      console.log(user)
      RequestsClient.createUser(user).then((res)=> {
        if(res) {
            window.location.reload();
        } else {
            alert('Sua validação se fudeu');
        }
      });
        
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id='signUp'>
      <div id="core">
        <div id="logo">
          <img src={logo} alt="Logo"></img>
        </div>
        <div id="form">
          <div className='input'>
            <label htmlFor='name'></label>
            <div className='input-icons'>
              <BsFillPersonFill className="icon"/>
              <input id='name' name='name' placeholder="Nome" onChange={handleChange} value={formData.name} />
            </div>
          </div>
          <div className='input'>
            <label htmlFor='email'></label>
            <div className='input-icons'>
              <BsFillPersonFill className="icon"/>
              <input id='email' name='email' placeholder="E-mail" onChange={handleChange} value={formData.email} />
            </div>
          </div>
          <div className='input'>
            <label htmlFor='password'></label>
            <div className='input-icons'>
              <BsFillKeyFill className="icon"/>
              <input  id='password' name='password' placeholder="Senha" type='password' onChange={handleChange} value={formData.password} />
            </div>
          </div>
          <div className='input'>
            <label htmlFor='confirmPassword'></label>
            <div className='input-icons'>
              <BsFillKeyFill className="icon"/>
              <input  id='confirmPassword' name='confirmPassword' placeholder="Repita a Senha" type='password' onChange={handleChange} value={formData.confirmPassword} />
            </div>
          </div>
          <button onClick={handleSubmit}>Cadastrar</button>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </div>
      </div> 
    </section>
  );
}

export default SignUp;
