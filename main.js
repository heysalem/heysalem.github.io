function mindText() {
  var x = document.getElementById("textForm");
  var text = "";
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  document.getElementById("user").innerHTML = text;
}
