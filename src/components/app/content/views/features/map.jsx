import { useCallback,useState, useRef, useMemo } from "react"
import{
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from '@react-google-maps/api'
//import { Places } from "./places"
//import { Distance } from "./distance"


const defaultOptions = {
    strokeOpacity: .5,
    strokeWeight: 2,
    clickable: false,
    draggable: true,
    editable: false,
    visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: '#8BC34A',
  fillColor: '#8BC34A',
}
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: '#FBC02D',
  fillColor: '#FBC02D',
}
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: '#FF5252',
  fillColor: '#FF5252',
}

const generateNonFoodPlaces = (position) => {
  const _placees=[]
  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2
    _places.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    })
  }
  return _places
}
export const Map = () => {
    const center = useMemo(() => ({lat:10, lng:-30}), []);
  return (
    <div className="map">
        <GoogleMap zoom={15}
        center={center} mapContainerClassName="map-container"/>
    </div>
  )
}