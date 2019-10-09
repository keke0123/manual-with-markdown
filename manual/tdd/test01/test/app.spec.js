const sayHello = require('../app').sayHello;
const assert = require('assert');
const fs = require('fs');

// if(sayHello) {
//     console.log('sayHello should return "hello"');
//     if(sayHello() === 'hello') {
//         console.log('success');
//     } else {
//         console.log('fail');
//     }
// }

describe('App test1', function() {
    it('sayHello should return hello', function(done) {
        if(sayHello() === 'hello') {
            done();
        }
    })
})

describe('App test2', function() {
    it('sayHello should return "hello"', function() {
        assert.equal(sayHello(), 'hello');
    });
    it('async test', function(done) {
        // console.log('filename', __filename);
        this.timeout(3000); // 단일 테스트의 제한 시간 설정
        fs.readFile(__filename, done);
    });
});
