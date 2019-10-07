var request = require('supertest');
var app = require(`../index.js`);

describe(`GET`, function(){
  if(`respond with Hello Jenkis`, function(done){
    request(app).get(`/`).expect(`Hello Jenkis`, done);
  });
});