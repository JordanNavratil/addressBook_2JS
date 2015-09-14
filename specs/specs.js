describe('romanNumeral', function() {
  it("assigns 'I' to 1", function(){
    expect(romanNumeral(1)).to.equal("I");
  });

  it("assigns 'XI' to 11", function(){
    expect(romanNumeral(11)).to.equal("XI");
  });

  it("assigns 'XI' to 11", function(){
    expect(romanNumeral(11)).to.equal("XI");
  });

  it("assigns 'CXI' to 111", function(){
    expect(romanNumeral(111)).to.equal("CXI");
  });

  it("assigns 'MCXI' to 1111", function(){
    expect(romanNumeral(1111)).to.equal("MCXI");
  });

  it("assigns 'MMMCMXCIX' to 3999", function(){
    expect(romanNumeral(3999)).to.equal("MMMCMXCIX");
  });

  it("only goes if less than 3999", function(){
    expect(romanNumeral(4000)).to.equal("Please enter a number less than or equal to 3,999.");
  });

  it("returns error when input = 0", function(){
    expect(romanNumeral(0)).to.equal("Concept of 0 does not exist in roman numerals.");
  });

});
