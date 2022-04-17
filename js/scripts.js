$(document).ready(function(){
  $("#formOne").submit(function(event){
event.preventDefault();

      const questionOneInput=parseInt($("#firstQuestion").val());
      const questionTwoInput=parseInt($("#secondQuestion").val());
      const questionThreeInput=parseInt($("#thirdQuestion").val());
      const questionFourInput=parseInt($("#fourthQuestion").val());
      const questionFiveInput=parseInt($("#fifthQuestion").val());

      const final = questionOneInput+questionTwoInput+questionThreeInput+questionFourInput+questionFiveInput
        if (final <5){
          $("#nullResult").show();
        } else if (final <9){
          $("#firstResult").show();
        } else if  (final <13 ){
          $("#secondResult").show();
        } else 
          $("#thirdResult").show();
          $("#formOne")[0].reset();   
      });
    });