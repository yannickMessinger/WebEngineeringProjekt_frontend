import React from 'react'
import {CharacterChoiceDisplay} from '../../components/Character/CharacterChoiceDisplay/CharacterChoiceDisplay';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './signUpStyle.css';

export const SignUp = () => {
  return (
    <div className='container'>
      <div>
        <CharacterChoiceDisplay/>
      </div>
      <div>
        <LoginForm/>
      </div>
    </div>
  )
}
