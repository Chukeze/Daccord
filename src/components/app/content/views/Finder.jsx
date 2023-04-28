import { useCallback, useState } from 'react'
import FinderCSS from './Finder.module.css'
import { useLoadScript } from '@react-google-maps/api'
import { Map } from './features/map'

export const Finder = ({ isReveal }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD0pRFKG43fupv4gUpJMIKAmnGe9HnaxDc',
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <section className="content" id='finder'>
      {isReveal ? (
        <>
          <div className="container">
            <h1>Find</h1>
            <div>
              <input type="search" name="" id="" placeholder="Explore Option" />
            </div>
          </div>
          <div className={FinderCSS.map}></div>
          <Map />
        </>
      ) : (
        <></>
      )}
    </section>
  )
}
