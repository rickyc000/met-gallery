import React from 'react'
import { getDepartment, getSingleArtwork } from '../lib/api'
// import { getDepartment } from '../lib/api'

function IndexPage() {

  const [artworks, setArtworks] = React.useState(null)
  const [art, setArt] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getDepartment(9)
        setArtworks(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  // const updateArtworkList = (artworkToAdd) => {
  //   // const updatedArtworkList = art.push(artworkToAdd)

  //   setArt([...art, artworkToAdd])
  // }
  

  React.useEffect(() => {

    const artworkIDs = []

    //* Generate 8 random IDs from a defined range:
    const generateIDs = (quantity, range) => {
      for (let i = 0; i < quantity; i++) {

        //* If the range is too small, return nothing:
        if (quantity > range) {
          console.log('Not enough IDs')
          return
        } else {
          let iDAdded = false

          //* Run this until an ID is added to the artworkIDs array:
          while (!iDAdded) {
            const ID = artworks.objectIDs[Math.floor(Math.random() * range) + 1]

            //* If the artworkID is not already in the array, push the ID to the array:
            if (!artworkIDs.includes(ID)) {
              artworkIDs.push(ID)
              iDAdded = true
            } else {
              //* Forces a repeat of the while loop if the generate ID already exists:
              iDAdded = false
            }
          }
        }
      }
      return artworkIDs
    }

    const getArtworksData = async () => {
      if (artworks) {

        //* Creates a list of 8 x objectIDs to GET request:
        const artworkIDsToFetch = generateIDs(8, artworks.objectIDs.length)

        const artworkObjects = []

        for (let i = 0; i < 8; i++) {
          try {
            const { data } = await getSingleArtwork(artworkIDsToFetch[i])
            artworkObjects.push(data)
          } catch (err) {
            console.log(err)
          }
        }
        setArt(artworkObjects)
      }
    }
    getArtworksData()
  }, [artworks])

  console.log(art)


  return (
    <main>
      <div>
        Index

      </div>

    </main>
  )
}

export default IndexPage