describe("Greetings", function(){
  it('returns the language selected: "English"', function(){
    var greetings = functionality();
    greetings.retLangVal("English")   
    assert.equal(greetings.retLang(), "English")
  })

  it('returns the language selected: "Afrikaans"', function(){
    var greetings = functionality();
    greetings.retLangVal("Afrikaans")  
    assert.equal(greetings.retLang(), "Afrikaans")
  })

    it('returns the language selected: "isiXhosa"', function(){
    var greetings = functionality();
    greetings.retLangVal("isiXhosa")  
    assert.equal(greetings.retLang(), "isiXhosa")
  })

    it('Undefined: returns "Please choose language" when no language is selected', function(){
    var greetings = functionality();
    greetings.retLangVal("")     
    assert.equal(greetings.retLang(), "Please choose language")
    assert.equal(greetings.retLang(undefined), "Please choose language")

  })

	it("returns greeting message: Name and greet in English", function(){
    var greetings = functionality();    
    greetings.setNames("Trinesh")
    assert.equal(greetings.greet("English"), "Hello Trinesh!")
  })

  it("returns greeting message: setNamesame and greet in Afrikaans", function(){
    var greetings = functionality();    
    greetings.setNames("Mike")
    assert.equal(greetings.greet("Afrikaans"), "Halo Mike!")
  })

  it("returns greeting message: Name and greet in isiXhosa", function(){
    var greetings = functionality();    
    greetings.setNames("Molly")
    assert.equal(greetings.greet("isiXhosa"), "Molo Molly!")
  })
  

    it("returns Please enter name, when no name is inputed", function(){
      var greetings = functionality();      
      assert.equal(greetings.retNoName(""), "Please enter name")
    })

  it("returns all 2 data entries in localStorage", function(){
    var greetings = functionality({"Trinesh":0, "Joe":0});        
    assert.equal(greetings.count(), 2)
  })

  it("returns all 4 data entries in localStorage", function(){
    var greetings = functionality({"Trinesh":0, "Joe":0, "Mike":0, "Molly":0});        
    assert.equal(greetings.count(), 4)
  })
  
   it("returns 0 data entries in localStorage", function(){
    var greetings = functionality({});        
    assert.equal(greetings.count(), 0)
  })
})

	



