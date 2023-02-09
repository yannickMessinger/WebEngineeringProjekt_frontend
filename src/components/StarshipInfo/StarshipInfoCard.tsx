import React from 'react'
import { StarshipInfo } from '../../typings/IStarshipInfo'
import css from './StarshipInfoCardStyle.module.css'


interface StarshipInfoProps{
  info:StarshipInfo | undefined
}


export const StarshipInfoCard = ({info}:StarshipInfoProps) => {
  return (
    <div className={css.wrapper}>
      <div>name: {info?.name}</div>
      <div>model: {info?.model}</div>
      <div>manufacturer: {info?.manufacturer}</div>
      <div>length: {info?.length}</div>
      <div>hyperdrive rating: {info?.hyperdrive_rating}</div>
      <div>max speed: {info?.max_atmosphering_speed}</div>
    </div>
  )
}
