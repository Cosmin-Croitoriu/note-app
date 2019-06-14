(function(exports){
function Note(text) {
  console.log(text);
    this.text = text
  };
  Note.prototype.getNote = function() {
    return this.text
  };
  exports.Note = Note
})(this);

