describe("Note list view", function() {
  it('returns a HTML note message', function() {
    var note = new Note("text");
    var noteList = new NoteList();
    noteList.addNote(note);
    var noteListView = new NoteListView(noteList);
    assert(noteListView.print(), "<ul><li><div>"+ note.text + "</div></li></ul>")
  });

  it('returns an empty HTML note message if we do not have note', function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert(noteListView.print(), "<ul></ul>")
  });

  it('returns a HTML note message', function() {
    var note = new Note("text");
    var note2 = new Note("text2")
    var noteList = new NoteList();
    noteList.addNote(note);
    noteList.addNote(note2);
    var noteListView = new NoteListView(noteList);
    assert(noteListView.print(), "<ul><li><div>"+ note.text + "</div></li><li><div>"+ note2.text + "</div></li></ul>")
  });
});