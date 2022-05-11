const $buttonsOperators = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $buttonsNumbers = document.querySelectorAll(".calculator__buttons--number");
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator__buttons--result");
const $buttonClean = document.querySelector(".calculator__buttons--clean");
const $operatorMinusPlus = document.querySelector(".calculator__buttons--operatorminus")

let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
  calculate = calculate + $button.textContent;
  $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$buttonsOperators.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$buttonResult.addEventListener("click", function () { 
  console.log(calculate);
  calculate = calculate.replaceAll(" ", "");
  $result.textContent = eval(calculate);
});

$buttonClean.addEventListener("click", function () {
  calculate = "";
  $inputGetNumbers.value = ""
  $result.textContent = "";
});

$operatorMinusPlus.addEventListener("click", function () {
  if (calculate > 0) {
    calculate = "-" + calculate
  }
  if (calculate < 0) {
    calculate = "+" + calculate
  }
});