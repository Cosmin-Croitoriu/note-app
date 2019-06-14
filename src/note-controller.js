(function(exports) {
 function NoteController(noteList){
   this.noteList = noteList;
   this.noteList.addNote("Favourite drink: pretzel.");
   this.noteListView = new NoteListView(this.noteList);
   console.log(this.noteList)
 }
 NoteController.prototype.getHtml = function(){
   var list = this.noteListView.print(this.noteList);
   console.log(list);
   document.getElementById('app').innerHTML = list;

 }
 exports.NoteController = NoteController;
})(this);
var notes = new NoteList();
var pretzel = new NoteController(notes);

pretzel.getHtml();