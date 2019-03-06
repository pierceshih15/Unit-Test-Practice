var should = chai.should()

describe('Test fizzBuzz function', function () {
  // 測試案例一：若該整數能被 3 整除，回傳 Fizz；
  it('should return Fizz if number can be evenly divisible by 3', function () {
    let result = fizzBuzz(9)
    result.should.be.equal('Fizz')
  })
  // 測試案例二：若該整數能被 5 整除，回傳 Buzz；
  it('should return Buzz if number can be evenly divisible by 5', function () {
    let result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  // 測試案例三：若該整數能被 3 和 5 同時整除，回傳 FizzBuzz；
  it('should return FizzBuzz if number can be evenly divisible by 3 and 5 ', function () {
    let result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  // 測試案例四：若都不能整除，回傳該整數。
  it("should return Buzz if number can't be evenly divisible by 3 and 5", function () {
    let result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})