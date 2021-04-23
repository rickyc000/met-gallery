import React from 'react'
import { getDepartment, getSingleArtwork } from '../lib/api'
import ArtworkCard from './ArtworkCard.js'

function IndexPage() {

  //* Contains IDs only:
  const [artworkIDList, setArtworkIDList] = React.useState(null)
  //* Contains artwork info + images:
  const [artToDisplay, setArtToDisplay] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getDepartment(9)
        setArtworkIDList(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


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
            const ID = artworkIDList.objectIDs[Math.floor(Math.random() * range) + 1]

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
      if (artworkIDList) {

        //* Creates a list of 8 x objectIDs to GET request:
        const artworkIDsToFetch = generateIDs(8, artworkIDList.objectIDs.length)

        const artworkData = []

        //* Loops through selected objectIDs before setting to state (art)
        for (let i = 0; i < 8; i++) {
          try {
            const { data } = await getSingleArtwork(artworkIDsToFetch[i])
            artworkData.push(data)
          } catch (err) {
            console.log(err)
          }
        }
        setArtToDisplay(artworkData)
      }
    }
    getArtworksData()
  }, [artworkIDList])

  console.log(artToDisplay)


  return (
    <main>
      <div>
        {
          artToDisplay ?
            <div>{
                artToDisplay.map(artwork => (
                  <ArtworkCard artwork={artwork} />
                ))
            }
            </div>
            :
            <div>Loading</div>



        }

      </div>

    </main>
  )
}

export default IndexPage