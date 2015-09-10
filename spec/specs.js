describe('dobleMe', function() {
  it ("check to double the second input", function() {
    expect(dobleMe(10,2)).to.equal(4);
  })
})


// describe('triangleTracker', function() {
//     it ("is equilateral when all sides are equal", function() {
//         expect(triangleTracker(4,4,4)).to.equal("Equilateral");
//     })

//     it ("is isosceles when 2 sides are exactly the same", function() {
//         expect(triangleTracker(4,4,6)).to.equal("Isosceles");
//     })

//     it ("is scalene when 3 sides are not equal", function() {
//         expect(triangleTracker(4,5,6)).to.equal("Scalene");
//     })
// })