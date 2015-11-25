$(document).ready(function() {
  //make delete buttons delete things
  $(document).on("click",".btn-danger", function(){
    $(this).parent().parent().fadeOut( "400", function(){
      $(this).remove();
      if($("tr").length<2){
        $("thead").remove();
      }
    });  
  });
 //add new info and buttons to the list
  $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    var newThing = $("#newThing").val().trim();
    var newHeader = $("<thead><tr><th class='header'>Let's get this done</th>").fadeIn(300);
    var newRow = $("<tr style='min-height: 2em'>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var doneBox = $("<input>").attr("type", "checkbox").attr("class", "doneBox").attr("data-state", "not-checked");
    var toDoThis = $("<td>" + newThing + "</td>").append(deleteBtn).prepend(doneBox);

    if(newThing.length>0){
      if($("thead").length===0){
        $("table").prepend(newHeader).fadeIn(300);
      }
      newRow.append(toDoThis).fadeIn(400);
      $("tbody").append(newRow);
      $("#newThing").val("").focus();
    }
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
});