 function greaterNum(num1, num2) {
    if (parseInt(num1) > parseInt(num2)) {
        return num1;
    } else {
        return num2;
    }
}

function updateComparisonResult() {
  var num1 = document.getElementById("number1").value
  var num2 = document.getElementById("number2").value
  var resultString = resultString = greaterNum(num1, num2) + " is greater.";
  document.getElementById("result").textContent = resultString;
}