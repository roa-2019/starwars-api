import request from 'superagent'

const rootUrl = ' https://api.wheretheiss.at/v1/'


// function getSatellite(id) {
//   return request.get(rootUrl + 'satellites/' + id)
//   .then(response => {
//     const details = response.body
//     return details
//   })
// }

//OR Implicit Return

export function getSatellite(id) {
  console.log(id)
  return request.get(rootUrl + 'satellites/' + id)
  .catch(error => console.log())
}