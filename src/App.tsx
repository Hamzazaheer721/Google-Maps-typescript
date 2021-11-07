import { FC } from 'react'
import RouterComponent from './routes'

export interface IMapProps {
  // eslint-disable-next-line no-undef
  MapType: google.maps.MapTypeId
}

const App: FC<{}> = () => <RouterComponent />

export default App
