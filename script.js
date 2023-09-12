let usd, myr, gbp;

document.querySelector("form").addEventListener("submit", function(eventPrint){
   eventPrint.preventDefault();

   const selectedCurrency = document.getElementById("currency").value;

   const amountInput = document.getElementById("num");
   const enteredAmount = parseFloat(amountInput.value);

   

   function calcCurrency(enteredAmount)
   {
      switch(selectedCurrency)
      {
        case "usd":
          usd = enteredAmount;
          myr = (enteredAmount * 4.68).toFixed(2);
          gbp = (enteredAmount * 0.80).toFixed(2);
          break;
        
        case "myr":
          myr = enteredAmount;
          usd = (enteredAmount * 0.21).toFixed(2);
          gbp = (enteredAmount * 0.17).toFixed(2);
          break;
        
        case "gbp":
          gbp = enteredAmount;
          usd = (enteredAmount * 1.25).toFixed(2);
          myr = (enteredAmount *  5.83).toFixed(2);
      }

     
   }
   
   const resultElement = document.getElementById("result");
   calcCurrency(enteredAmount);
   resultElement.innerHTML = "Selected Currency: " + gbp + "£ " + usd + "$ " + myr + "MYR";

   
});


  



