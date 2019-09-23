import request from 'superagent'

const rootUrl = ' https://api.wheretheiss.at/v1/'

export function getSatellite(id) {
  return request.get(rootUrl + 'satellites/' + id)
    .catch(error => console.log(error))
}

export function leapFrog() {
  return request.post('/api/v1/satellite/')
}

export function recieveSatellite() {
  return request.get('/api/v1/satellite/')
    .catch(error => console.log(error))
}

export function deleteSatelliteData() {
  return request.delete('/api/v1/satellite')
  .catch(error => console.log(error))

}


