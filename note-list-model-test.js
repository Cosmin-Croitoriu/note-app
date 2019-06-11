describe("NoteList", function(){
  it("stores notes in a note list", function(){
    var note = new Note("text");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert(noteList.notes.length, 1);
  });

  it("displays all notes", function(){
    var note = new Note("text");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert(noteList.list(), note)
  })
});