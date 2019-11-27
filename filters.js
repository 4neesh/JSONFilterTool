//load array of all years
window.onload = function(){

//move array into the select html for years
var select = document.getElementById("selectYear");
var options = yearArr;

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);

}
//load array of all unique nationalities

var nationArr = jsonAlbumDetails.map(function(el){
  return el.nationality;
})

//move array into the select html for nationalities
var select = document.getElementById("selectCountry")
var options = nationArr.filter(function(item,pos){
  return nationArr.indexOf(item)==pos;
});
options=options.sort()

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

//build table
{
  // get a reference to the movies table in the DOM
  var table = document.getElementById("hitsTable");
  // for each object in the movies array, add a row to the table
  for(var albumIdx = 0; albumIdx < jsonAlbumDetails.length; albumIdx++) {
    // get a reference to the current movie
    var album = jsonAlbumDetails[albumIdx];
    // create a new row
    var tr = document.createElement("tr");
    // for each property of the object, add a cell to the table row
    var addCell = function(text) {
      var td = document.createElement("td");
      var txt = document.createTextNode(text);
      td.appendChild(txt);
      tr.appendChild(td);
    };
    addCell(album.year);
    addCell(album.artist);
    addCell(album.nationality);
    addCell(album.album)

    // add the newly create row to the table
    table.appendChild(tr)
  }
};
}
