import { GOOGLE_API_KEY } from '../config/constants';

export const loadMapApi = () => {
  const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
  const scripts = document.getElementsByTagName('script');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapsURL) === 0) return scripts[i]
  }

  const googleMapScript = document.createElement('script')
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;

  window.document.head.appendChild(googleMapScript)

  return googleMapScript
}
