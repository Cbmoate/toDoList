$(document).ready(function(){

  //dem variables
  var newThing = $("#newThing").val().trim;
    var isDuplicate = false;
    $("td.word-td").each(function() {
      if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate) {
      $(".alert-danger").slideDown();
      return;
    }
  
  var newRow = $("<tr>");
  var thingTd = $("<td>").addClass("thing-td").append(newThing)
  var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
  var deleteTd = $("<td>").append(deleteBtn);

  newRow.append(thingTd).append(deleteTd);
  $("tbody").append(newRow);

  $("#newThing").val("").focus();
  //});

  $("table").on("click", ".btn-danger", function(){
    $(this).parent().parent().remove();
  });

});