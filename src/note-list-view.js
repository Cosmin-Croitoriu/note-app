function NoteListView(noteList) {
  this.noteList = noteList;
};

NoteListView.prototype.print = function() {
  var noteListViewString = "<ul>";

  for (var i = 0; i < this.noteList.notes.length; i++) {
   noteListViewString += "<li><div>" + this.noteList.notes[i].text + "</div></li>";
  };
  noteListViewString += "</ul>";

  return noteListViewString;
};
