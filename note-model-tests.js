describe("Note", function(){
  it("stores a note", function(){
    var note = new Note("text");
    assert(note.text, "text")
  })
})