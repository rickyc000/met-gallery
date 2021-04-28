import React from 'react'
import { Link } from 'react-router-dom'

function ArtworkCard({ artwork, itemNumber }) {

  return (
    <div key={artwork.objectID} className={`image-wrapper box${itemNumber} `}>
      <Link to={`/show/${artwork.objectID}`}>
        <img
          className='index-image'
          src={artwork.primaryImage}
          alt={artwork.objectName}
        // width='200px'
        />
      </Link>
    </div>
  )
}

export default ArtworkCard