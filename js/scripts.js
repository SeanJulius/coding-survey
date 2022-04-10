const firstQuestion = $("#firstQuestion").val();
const secondQuestion = $("#secondQuestion").val();
const thirdQuestion = $("#thirdQuestion").val();
const fourthQuestion = $("#fourthQuestion").val();
const fifthQuestion = $("#fifthQuestion").val();

$(document).ready(function() {
  $("#name").submit(function(event) {
    $("#firstQestion").show();
    event.preventDefault();
  });
});