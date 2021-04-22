import React from 'react'
import { getSingleArtwork } from '../lib/api.js'


function SingleArtworkPage() {

  const [artwork, setArtwork] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleArtwork(790)
        setArtwork(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(artwork)



  return (
    <main>
      {artwork ?
        <div>
          <div>
            <img
            src={artwork.primaryImage}
            alt={artwork.title}
            className="artwork-image"
            />
          </div>
          <div>
            {artwork.title} ({artwork.objectDate})
          </div>
          <div>
            Artist: {artwork.artistDisplayName ? <p>{artwork.artistDisplayName}</p> : <p>Unknown</p> }
          </div>
          <div>
            Dimensions: {artwork.dimensions}
          </div>
          
        </div> : <div>Loading</div>}
    </main>
  )
}

export default SingleArtworkPage