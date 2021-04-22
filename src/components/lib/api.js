import axios from 'axios'

export function getArt() {
  return axios.get('https://cors.bridged.cc/https://collectionapi.metmuseum.org//public/collection/v1/objects/436262'
  )
}