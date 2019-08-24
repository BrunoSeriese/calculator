



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


$("#pressIt").click(function()
{

  var y = parseInt( $("#number1").val());
  var i = parseInt($("#number2").val());
  var z =  $("#usedOperator").val();
  console.log(y +i+ z);

 var result="error";
switch (z) {
  case "add": result=add(y,i);break;
  case 'times' : result=times(y,i);break;
  case "divide": result=divide(y,i);break;
  case "subtract": result=subtract(y,i);break;

  default:
}



  //var result = calc(y,i,eval(z));
  console.log(result);

  $("#answer").text(result);
//  $("#answer").val(result);
  });



  $(document).keydown(function(event)
  {

   z = event.key;
if (z === "Enter")
{


  var y = parseInt( $("#number1").val());
  var i = parseInt($("#number2").val());
  var z =  $("#usedOperator").val();
  console.log(y +i+ z);

  var result="error";
  switch (z) {
  case "add": result=add(y,i);break;
  case 'times' : result=times(y,i);break;
  case "divide": result=divide(y,i);break;
  case "subtract": result=subtract(y,i);break;

  default:
  }



  //var result = calc(y,i,eval(z));
  console.log(result);

  $("#answer").text(result);
  //  $("#answer").val(result);

















}

  });
