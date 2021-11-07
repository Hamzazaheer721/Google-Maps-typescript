import { FC, useEffect, useState } from 'react'
import { loadMapApi } from '../../utils'
import { Container, WelcomeText } from './index.styled'

const WelcomeComponent: FC<{}> = () => {
  const [scriptloaded, setScriptLoaded] = useState<boolean>(false)

  useEffect(() => {
    const googleMapScript = loadMapApi()
    googleMapScript.addEventListener('load', () => {
      setScriptLoaded(true)
    })
  }, [])

  return (
    <Container>
      <WelcomeText>Whatspays</WelcomeText>
      {scriptloaded && <h1>hey</h1>}
    </Container>
  )
}

export default WelcomeComponent
