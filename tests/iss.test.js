import nock from 'nock'
import request from 'supertest'
import {addSatellite} from '../server/db'


import server from '../server/server'
import { JestEnvironment } from '@jest/environment'
import { promises } from 'dns'
import { findRepos } from 'jest-changed-files'
import { exportAllDeclaration } from '@babel/types'

jest.mock('../server/db', () => {
  return {
    addSatellite: jest.fn(() => {
      return Promise.resolve()
    })
  }

})

test('GET /api/v1/reddit/subreddit', () => {
  const scope = nock('https://api.wheretheiss.at')
    .get('/v1/satellites/25544')
    .reply(200, {latitude: 51.264554333011, longitude: 1, timestamp: 12})
    

  return request(server)
    .post('/api/v1/satellite')
    .then(res => {
      scope.done()
      console.log(addSatellite.mock.calls)
      expect(addSatellite.mock.calls[0][0].longitude).toBe(1)

    })
})