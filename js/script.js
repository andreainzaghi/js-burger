var calculate = document .getElementById('calculate');
var burgerName = document.getElementById('burger-name-input');
var ingredients = document.getElementsByClassName('add-Ingredients');
var coupon = document.getElementById('coupon-input');
var total = document.getElementById('total');
var coupons=["aeiou","abcdef","luigi14"];
// aggiunta evento al click
calculate.addEventListener("click",
function(){
  // controlliamo se e stato inserito il nome

  if (burgerName.value != "") {
  // controlliamo se il nome e' stato inserito

    var sum=50;
    for( var i =0; i< ingredients.length; i++){
      // se ligrediente e stato selezionato vado a prendere il su valore
      if (ingredients[i].checked == true){
        sum += parseInt(ingredients[i].value);
      }
    }
    // applico  evento sconto
    if (coupons.includes(coupon.value)==true) {
      sum-=sum*0.2;

    }
    total.innerHTML = sum +"$";

 }else {
  alert("Inserisci il nome del tuo panino!!!")
 }
}
)
