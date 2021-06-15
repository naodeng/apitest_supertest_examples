const request = require('supertest');
const express = require('express');
var sleep = require('sleep');


const app = express();

describe('GET /user', function() {
    it('responds with json', function(done) {
      request(app)
        .get('https://www.baidu.com')
        .expect(200, done);
        // sleep.sleep(100)
    }
    );
  });