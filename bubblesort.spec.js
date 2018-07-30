

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a numerical array', function(){
    expect( bubbleSort([4,2,7,3,9,5] )).toEqual( [2,3,4,5,7,9] );
  });
  it('calls itself 5 times', function() {
    spyOn(window, 'swap').and.callThrough();
    var array = [4,2,7,3,9,5];
    bubbleSort(array);
    expect(swap.calls.count()).toEqual(5);
  });

});
