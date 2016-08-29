$(document).ready(function() {

 //add new info and buttons to the list
  $(".btn-primary").on("click", function(e){
    //takes back control of the button functionality from bootstrap
    e.preventDefault();
    //components of a new todo list item.
    var newThing = $("#listItem").val().trim();
    var newRow = $("<tr>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var doneBox = $("<input>").attr("type", "checkbox").attr("class", "doneBox").attr("data-state", "not-checked");
    var toDoThis = $("<td>").addClass("word-td").append(newThing).append(deleteBtn).prepend(doneBox)
    newRow.append(toDoThis);
    $("tbody").append(newRow);
    $("#listItem").val("").focus();
  }); 

  //Make the check box check things
  $(document).on("click", ".doneBox", function(){
    if($(this).prop("checked") === true){
      $(this).parent().attr("class", "done");
    }
    else{
      $(this).parent().removeClass();
    }
  });

  //make delete buttons delete things
  $(document).on("click",".btn-danger", function(){
    $(this).parent().parent().remove()
  });

});