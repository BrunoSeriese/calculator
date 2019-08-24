var temp =0;



function calc(num1, num2, operator) {
  return operator(num1, num2);
}



function divide(num1, num2)

{
  return num1 / num2;
}



function subtract(num1, num2) {
  return num1 - num2;
}




function times(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}


$("#subtract").click(function()
{

  var y = parseInt( $("#number1").val());
  var i = parseInt($("#number2").val());

var result = calc(y,i,subtract);
  $("#answer").text(result);
  temp = temp +result;
    $("#answer").text(temp);
  return temp;
//  $("#answer").val(result);
  });

  $("#add").click(function()
  {

    var y = parseInt( $("#number1").val());
    var i = parseInt($("#number2").val());

  var result = calc(y,i,add);
    $("#answer").text(result);

    temp = temp +result;
      $("#answer").text(temp);
    return temp;
  //  $("#answer").val(result);
    });


    $("#divide").click(function()
    {

      var y = parseInt( $("#number1").val());
      var i = parseInt($("#number2").val());

    var result = calc(y,i,divide);
      $("#answer").text(result);
      temp = temp +result;
        $("#answer").text(temp);
      return temp;


    //  $("#answer").val(result);
      });


      $("#times").click(function()
      {

        var y = parseInt( $("#number1").val());
        var i = parseInt($("#number2").val());

      var result = calc(y,i,times);


        temp = temp +result;
          $("#answer").text(temp);
        return temp;


        });


$("#clear").click(function()
{
  temp = temp-temp;
  $("#answer").text(temp);
  
  return temp;
});
