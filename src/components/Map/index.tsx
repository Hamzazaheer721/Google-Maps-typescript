/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
import { IGoogleMap, IGoogleLatLng } from '../../types'
import { MapContainer } from './index.styled'

export interface IMapProps {
  mapType?: google.maps.MapTypeId
  mapTypeControl?: boolean
}

const Map: FC<IMapProps> = memo(({ mapType, mapTypeControl = false }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<IGoogleMap>()

  const initMap = useCallback(
    (zoomLevel: number, address: IGoogleLatLng) => {
      if (mapRef.current) {
        setMap(
          new google.maps.Map(mapRef.current, {
            zoom: zoomLevel,
            center: address,
            mapTypeControl,
            streetViewControl: true,
            zoomControl: true,
            mapTypeId: mapType
          })
        )
      }
    },
    [map]
  )

  const defaultMapStart = useCallback(() => {
    const defaultAddress = new google.maps.LatLng(65.156, 13.369)
    initMap(5, defaultAddress)
  }, [map])

  useEffect(() => {
    !map && defaultMapStart()
  }, [])

  return (
    <MapContainer>
      <MapContainer styleMap ref={mapRef} />
    </MapContainer>
  )
})

export default Map
