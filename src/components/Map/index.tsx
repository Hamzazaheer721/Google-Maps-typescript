/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { FC } from 'react'

export interface IMapProps {
  mapType?: google.maps.MapTypeId
  mapTypeControl?: boolean
}

const Map: FC<IMapProps> = ({ mapType, mapTypeControl = false }) => (
  <h1>This is my map component</h1>
)

export default Map
