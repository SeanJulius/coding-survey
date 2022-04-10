const firstQuestion = $("#firstQuestion").val();
const secondQuestion = $("#secondQuestion").val();
const thirdQuestion = $("#thirdQuestion").val();
const fourthQuestion = $("#fourthQuestion").val();
const fifthQuestion = $("#fifthQuestion").val();

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $("#firstQuestion").show();
    $("#secondQuestion").show();
    $("#thirdQuestion").show();
    $("#fourthQuestion").show();
    $("#fifthQuestion").show();
  });
});

$(document).ready(function() {
  $("form#firstQuestion").submit(function(event) {
    const firstQuestion = parseInt($("select#firstQuestion").val());
    const secondQuestion = parseInt($("select#secondQuestion").val());
    const thirdQuestion = parseInt($("select#thirdQuestion").val());
    const fourthQuestion = parseInt($("select#fourthQuestion").val());
    const fifthQuestion = parseInt($("select#fifthQuestion").val());

    if (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion <= 7) {
      alert("C# is the coding path for you");
    } else if (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion === 8, 9, 10, 11) {
      alert("Rust is the coding path for you");
    } else { (firstQuestion + secondQuestion + thirdQuestion + fourthQuestion + fifthQuestion >=12) 
      alert("Java Script is the coding path for you");
    }

    event.preventDefault();
  });
});
