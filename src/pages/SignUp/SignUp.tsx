import React from 'react'
import {CharacterChoice} from '../../components/SignUp/CharacterChoice/CharacterChoice';
import { LoginForm } from '../../components/SignUp/LoginForm/LoginForm';
import './signUpStyle.css';

export const SignUp = () => {
  return (
    <div className='container'>
      <div>
        <CharacterChoice/>
      </div>
      <div>
        <LoginForm/>
      </div>
    </div>
  )
}
