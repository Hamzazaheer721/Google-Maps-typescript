/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { FC } from 'react'

export interface IMapProps {
  MapType: google.maps.MapTypeId
  mapTypeControl?: boolean
}

const Map: FC<IMapProps> = ({ MapType, mapTypeControl = false }) => <h1>hey</h1>

export default Map
