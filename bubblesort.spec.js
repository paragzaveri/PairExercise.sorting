// describe('Bubble Sort', function(){
//   it('handles an empty array', function(){
//     expect( bubbleSort[] ).toEqual( [] );
//   });


// });

beforeAll(function () {
  spyOn(swap()).callThrough();
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a numerical array', function(){
    expect( bubbleSort([4,2,7,3,9,5] )).toEqual( [2,3,4,5,7,9] );
  });
  // it('getting to the center of tootsiepop involves exactly three licks', function () {
  //   swap();
  //   expect(swap.calls.count()).toEqual(5);
  // });
  it('calls itself 5 times', function() {
    // The number of times your function recurses
    // will depend on how you construct your base case
    // If you are getting a different number of factorial calls,
    // Play around with your base case!
    spyOn(window, 'swap').and.callThrough();
    var array = [4,2,7,3,9,5];
    bubbleSort(array);
    expect(bubbleSort.calls.count()).toEqual(5);
  });




});



