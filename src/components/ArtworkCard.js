import React from 'react'
import { Link } from 'react-router-dom'

function ArtworkCard({ artwork }) {

  return (
    <div>
      <Link to="/show">
        Artwork
        <div key={artwork.objectID}>{artwork.objectName}</div>
        <img src={artwork.primaryImage} alt={artwork.objectName} width="200px"/>
      </Link>
    </div>
  )
}

export default ArtworkCard