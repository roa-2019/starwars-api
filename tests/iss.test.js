import nock from 'nock'
import request from 'supertest'

import server from '../../server/server'

test('GET /api/v1/reddit/subreddit', () => {
  const scope = nock('http://www.reddit.com')
    .get('/r/bananas.json')
    .reply(200, {data: {children: {latitude: 51.264554333011}}})

  return request(server)
    .get('api.wheretheiss.at/v1/25544')
    .expect(200)
    .then(res => {
      scope.done()
      expect(res.body.msg).toBe(51.264554333011)
    })
})