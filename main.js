var elForm = document.querySelector(".js-form");
var elList = document.querySelector(".js-list");
var arr = [];

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();
   
   var firstName = elForm.querySelector(".js-fname-input").value;
   var lastName = elForm.querySelector(".js-lastname-input").value;
   var telNumber = elForm.querySelector(".js-tel-number").value;
   
   var obj = {
      fName: firstName,
      lName: lastName,
      telNum: telNumber,
   }
   
   arr.push(obj);
   
   elForm.reset();
   
   elList.textContent = null;
   
   for(var i = 0; i < arr.length; i++) {
      var elItem = document.createElement("li");
      var elTitle = document.createElement("h3");
      var phoneNumber = document.createElement("p");
      
      elTitle.textContent = arr[i].fName + " " + arr[i].lName;
      phoneNumber.textContent = arr[i].telNum;
      
      elItem.appendChild(elTitle);
      elItem.appendChild(phoneNumber);
      elList.appendChild(elItem)
   }
})