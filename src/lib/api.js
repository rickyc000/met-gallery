import axios from 'axios'

export function getSingleArtwork(id) {
  return axios.get(`https://cors.bridged.cc/https://collectionapi.metmuseum.org//public/collection/v1/objects/${id}`
  )
}