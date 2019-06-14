(function(exports){
function NoteList() {
  this.notes = [];
};
NoteList.prototype.createNote = function(text){
  return new Note(text);
};

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
};
NoteList.prototype.list = function(){
  return this.notes;

};
exports.NoteList = NoteList;
})(this);