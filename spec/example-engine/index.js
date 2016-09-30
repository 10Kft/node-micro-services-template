process.env.NODE_CONFIG_DIR = process.cwd() + '/config/env';

var path = require('path');
var request = require('supertest');
var serverPath = path.join(process.cwd(), '/services/example-engine/app.js');

describe('Loading Express', function () {
  var server;
  beforeEach(function () {
    server = require(serverPath);
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
    request(server)
      .get('/')
      .expect('Hello World!')
      .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
