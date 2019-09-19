import request from 'superagent'

const rootUrl = ' https://api.wheretheiss.at/v1/'

export function getSatellite(id) {
  return request.get(rootUrl + 'satellites/' + id)
    .catch(error => console.log(error))
}

export function leapFrog() {
  console.log(Date(Date.now()).toString())
  request.post('/api/v1/satellite/')
  .then(result => {
    console.log(JSON.parse(JSON.parse(result.text).text))
  })
}

