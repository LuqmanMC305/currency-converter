const currencyDropdown = document.getElementById("currency");
const submitButton = document.querySelector(".submit");

let selectedCurrency = ""
currencyDropdown.addEventListener("change", function(){
    selectedCurrency = currencyDropdown.value;

});

submitButton.addEventListener("click", function(){
  const resultDiv = document.getElementById("result");

  if(selectedCurrency){
    
    resultDiv.textContent = "Currency: " + selectedCurrency;
  }
  else{
    resultDiv.textContent = "Please select a currency.";
  }
});

