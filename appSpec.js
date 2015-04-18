hello = require('./app.js')
//console.log(hello());

describe('app', function(){
  it('test',function(){
    expect(hello()).toBe('Hello devops')
  })
})

