import React from 'react'
import { CharacterInfo } from '../../typings/CharacterInfo'
import css from './CharacterInfoCardStyle.module.css'

interface CharacterInfoCardProps{
  info: CharacterInfo | undefined
}


export const CharacterInfoCard = ({info}:CharacterInfoCardProps) => {
  return (
    <div className={css.wrapper}>
      <div>name: {info?.name}</div>
      <div>birth year: {info?.birth_year}</div>
      <div>eye color: {info?.eye_color}</div>
      <div>hair color: {info?.hair_color}</div>
      <div>height: {info?.height}</div>
      <div>skin color: {info?.skin_color}</div>
      <div>starships:{info?.starships}</div>
    </div>
  )
}
