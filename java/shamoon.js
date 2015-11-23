$(document).ready(function() {
  $(document).on("click", ".btn-danger", function(){
    $(this).parent().parent().remove;
  });

  $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    var newThing = $("#newThing").val().trim();
    var newRow = $("<tr>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var doneBox = $("<input>").attr("type", "checkbox").attr("class", "doneBox").attr("data-state", "not-checked");
    var toDoThis = $("<td>").addClass("word-td").append(newThing).append(deleteBtn).prepend(doneBox)
    newRow.append(toDoThis);
    $("tbody").append(newRow);
    $("#newThing").val("").focus();
  }); 
  $(document).on("click", ".doneBox", function(){
    var status = $(this).attr("data-state");
    if (status === "not-checked"){
      $(this).parent().attr("class", "str");
      $(this).attr("data-state", "checked")
    }
    else{
      $(this).parent().removeClass();
      $(this).attr("data-state", "not-checked");
    }
  });
});