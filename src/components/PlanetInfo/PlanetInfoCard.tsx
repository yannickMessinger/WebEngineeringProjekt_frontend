import React from 'react'
import { PlanetInfo } from '../../typings/IPlanetInfo'
import css from "./PlanetInfoCardStyle.module.css"

interface PlanetInfoCardProps{
  info: PlanetInfo | undefined
}


export const PlanetInfoCard = ({info}: PlanetInfoCardProps) => {
  return (
    <div className={css.wrapper}>
      <div>Name: {info?.name}</div>
      <div>diameter: {info?.diameter}</div>
      <div>Gravity: {info?.gravity}</div>
      <div>climate: {info?.climate}</div>
      <div>population: {info?.population}</div>
      <div>terrain: {info?.terrain}</div>
    </div>
  )
}
