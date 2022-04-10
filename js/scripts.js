const firstQuestion = $("#firstQuestion").val();
const secondQuestion = $("#secondQuestion").val();
const thirdQuestion = $("#thirdQuestion").val();
const fourthQuestion = $("#fourthQuestion").val();
const fifthQuestion = $("#fifthQuestion").val();

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $("#firstQuestion").show();
  });
});

$(document).ready(function() {
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    
    $("#secondQuestion").show();
  });
});