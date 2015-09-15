describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
    expect(testContact.businessAddresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock", "Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  })
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main St");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "Test City", "Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});

describe('businessAddress', function() {
  it("creates a new business address with the given specifications", function(){
    var testBusinessAddress = new businessAddress("400 SW 6th Ave", "Portland", "Oregon");
    expect(testBusinessAddress.street).to.equal("400 SW 6th Ave");
    expect(testBusinessAddress.city).to.equal("Portland");
    expect(testBusinessAddress.state).to.equal("Oregon");
  });

  it("adds the fullBusinessAddress method to all addresses", function() {
    var testBusinessAddress = new businessAddress("400 SW 6th Ave", "Portland", "Oregon");
    expect(testBusinessAddress.fullBusinessAddress()).to.equal("400 SW 6th Ave, Portland, Oregon");
  });
});
