import request from 'superagent'

const rootUrl = ' https://api.wheretheiss.at/v1/'

export function getSatellite(id) {
  return request.get(rootUrl + 'satellites/' + id)
  .catch(error => console.log(error))
}