 
   let bill = document.getElementById("bill");
   let numberPeople = document.getElementById("numberPeople");
   let finalAmount = document.getElementById('totalAmount');
   let tipButton = document.querySelectorAll(".tip5");


    tipButton.forEach((button) =>{
    button.addEventListener('click', () =>{    // click event 
        percent = (parseInt(button.innerHTML));
        calculations();   // parseInt
    })
    });

    let resetAll = () => {
        finalAmount.innerHTML = "$0";
        tipamountmoneytext.innerHTML = "$0"; 
            
    };
   
   
let percent = 0;

const calculations = () =>{
    let bill = document.getElementById('bill').value;
    let totalAm = document.getAnimations('totalAmount').value;
    let numberPeople = document.getElementById('numberPeople').value;

   let finalPercent = (document.getElementById('tipamountmoneytext').innerHTML =
   (Number(bill) * Number(percent)) /100);

   let customer = (document.getElementById('CustomText').innerHTML = 
   (Number(bill) * Number(percent)) /100);

   let finalBill = (document.getElementById('totalAmount').innerHTML = 
   Number(bill) + Number(finalPercent));

   let finalBillPerson = (document.getElementById("totalAmount").innerHTML =
    Number(finalBill) / Number(numberPeople));


  // Check if the input values are valid numbers
  if (isNaN(bill) || isNaN(numberPeople)) {
    return "0";
  }

  // Check if the bill amount and number of people are both greater than zero
  if (bill <= 0 || numberPeople <= 0) {
    return "0";
  }

  // Check if the tip percentage is greater than zero
  if (percent <= 0) {
    return "0";
  }

   
}

   bill.addEventListener("input", calculations);
   numberPeople.addEventListener("input", calculations);

 


     

   
   



