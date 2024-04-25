// listen to form
document.getElementById("loan-form").addEventListener("submit", function(e){

     // Hide the result
     // document.getElementById("result").style.display = "none";

     // Shoe the loader

     document.getElementById("loading").style.display = "block"
     setTimeout(calculateResult,2000)

     e.preventDefault()
});
function calculateResult(){
     const amount = document.getElementById("amount");
     const interest = document.getElementById("interest");
     const years = document.getElementById("year");
     const mountlyPayment = document.getElementById("mountly-payment");
     const totalPayment = document.getElementById("total-payment");
     const totalInterest = document.getElementById("total-interest");

     const princ= parseFloat(amount.value);
     const calculateInterest = parseFloat(interest.value)/100/12;
     const calculatePayment = parseFloat(years.value)*12 ;

     //Compute monthly interest

     const x = Math.pow(1+calculateInterest, calculatePayment );
     const monthly = (princ*x*calculateInterest)/(x-1);
     


     if(isFinite(monthly)){
          
          mountlyPayment.value = monthly.toFixed(2);
          totalPayment.value = (monthly*calculatePayment).toFixed(2)
          totalInterest.value = ((monthly*calculatePayment)-princ).toFixed(2)

          document.getElementById("result").style.display = "block";
          document.getElementById("loading").style.display = "none";
     }else{
          console.log("error");
          showError("Please check your numbers")
     }

     // setTimeout((calculateResult), 3000)

     // princ=""
     // calculateInterest = ""
     // calculatePayment = "";
     // mountlyPayment.value = ""
     // totalPayment.value = ""
     // totalInterest.value =""


     // e.preventDefault();


}

function showError(error){
     document.getElementById("result").style.display = "none";
     document.getElementById("loading").style.display = "none";
     // Create div
     const errDiv = document.createElement('div');

     //Get elements

     const card = document.querySelector(".card");
     const heading = document.querySelector(".heading")

     //add class
     errDiv.className = "alert alert-danger";

     //append child
     errDiv.appendChild(document.createTextNode(error));
     card.insertBefore(errDiv,heading);

     setTimeout(clearError,3000);
}

function clearError(){
     document.querySelector('.alert').remove();
}