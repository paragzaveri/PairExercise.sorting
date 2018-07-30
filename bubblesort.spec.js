// describe('Bubble Sort', function(){
//   it('handles an empty array', function(){
//     expect( bubbleSort[] ).toEqual( [] );
//   });


// });


describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a numerical array', function(){
    expect( bubbleSort[4,2,7,3,9,5] ).toEqual( [2,3,4,5,7,9] );
  });
});
