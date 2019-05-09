var noteShow = $("#noteShow");
var newDisplay = $("#newDisplay");


var start = () => {
  $.ajax({
    url: "/api/notes",
    method: "GET"
  }).then((noteData) => {
    console.log(noteData)
    for (var i = 0; i < noteData.length; i++) {
      var listItem = $("<div class='card mt-4'>");
      console.log(noteData[i])
      var noteList = $("<ul>");
      noteList.append(
        $("<h2>").text(noteData[i].title),
        $("<h3>").text(noteData[i].body),
        $("<p>").text(noteData[i].created_at)
      );
      listItem.append(noteList);
      newDisplay.append(listItem);
    };
    
  });
};


const submitClick = (event) => {
  event.preventDefault();

  var newData = {
    title: $("#noteTitle").val().trim(),
    body: $("#noteBody").val().trim()
  }


  $.ajax({
    url: "/api/notes",
    method: "POST",
    data: newData
  }).then((data) => {
    if (data) {
      alert("Note added");
    } else {
      console.log(err)
    };
    $("#noteTitle").empty();
    $("#noteBody").empty();
    newDisplay.empty();
    start();
  });
};


noteShow.on("click", function(event){
  event.preventDefault();
  newDisplay.empty();
  start();
});

$("#noteSubmit").on("click", submitClick);