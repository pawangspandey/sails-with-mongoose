var expect = require('chai').expect;
var request = require('request');

describe('student', function() {
  describe('Sending POST Request on /students', function() {
    it('should insert a student info', function(done) {
      request.post({
        url: 'http://localhost:9999/students',
        form: {
          name : 'pawan',
          address : 'UNR3'
        }
      },function(err,httpResponse,body){
        if(err){
          done(err);
        }else{
          expect(body).to.be.an('string');
          done();
        }
      })
    });
  })
});
