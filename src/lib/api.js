import axios from 'axios'

const baseURL = 'https://cors.bridged.cc/https://collectionapi.metmuseum.org'

export function getSingleArtwork(id) {
  return axios.get(`${baseURL}/public/collection/v1/objects/${id}`)
}


// export function getDepartment(id) {
//   return axios.get(`${baseURL}/public/collection/v1/objects?departmentIds=${id}`)
// }

export function getDepartment(id) {
  return axios.get(`${baseURL}/public/collection/v1/search?hasImages=true&q=painting`)
}