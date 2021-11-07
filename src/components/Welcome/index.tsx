/* eslint-disable no-undef */
import { FC, useEffect, useRef, useState } from 'react'
import Map from '../Map'
import { loadMapApi } from '../../utils'
import { Container, WelcomeText } from './index.styled'

const WelcomeComponent: FC<{}> = () => {
  const [scriptloaded, setScriptLoaded] = useState<boolean>(false)
  const googleRef = useRef<typeof google>()

  useEffect(() => {
    const googleMapScript = loadMapApi()
    googleMapScript.addEventListener('load', () => {
      setScriptLoaded(true)
    })
  }, [])

  useEffect(() => {
    if (scriptloaded && !googleRef.current) {
      googleRef.current = google
    }
  }, [scriptloaded])

  return (
    <Container>
      <WelcomeText>Whatspays</WelcomeText>
      {scriptloaded && (
        <Map
          mapType={googleRef.current?.maps.MapTypeId.ROADMAP}
          mapTypeControl
        />
      )}
    </Container>
  )
}

export default WelcomeComponent
