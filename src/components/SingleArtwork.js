import React from 'react'
import { getSingleArtwork } from '../lib/api.js'



function SingleArtworkPage() {

  const [artwork, setArtwork] = React.useState(null)


  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleArtwork(454)
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
            <div className="single-artwork-image-wrapper">
              <img
                src={artwork.primaryImage}
                alt={artwork.title}
                className="single-artwork-image"
              />
            </div>


          </div>
          <div>
            {artwork.title} ({artwork.objectDate})
            </div>
          <div>
            {artwork.artistDisplayName ? <p>{artwork.artistDisplayName}</p> : <p>Unknown Artist</p>}
          </div>
          <div>
            Dimensions: {artwork.dimensions}
          </div>
          <div>
            {artwork.creditLine}
          </div>

        </div> : <div>Loading</div>}
    </main>
  )
}

export default SingleArtworkPage