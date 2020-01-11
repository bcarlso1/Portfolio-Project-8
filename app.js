/* ********
Populate page
************* */

const parentDiv = document.getElementById('employees');
const url = 'https://randomuser.me/api/?results=12';

fetch(url)
  .then(response => response.json())
  .then(data => data.results.map((employee) => {
      var employeeDiv = document.createElement("div");
      employeeDiv.innerHTML = 
        `<div class="employee-profile">
        <img src="${employee.picture.medium}">
        <div class="info">
        <h4 class="name">${employee.name.first} ${employee.name.last}</h4>
          <p>${employee.email}</p>
          <p>${employee.location.city}</p>
        <div class="more-detail">
        <hr>
        <p>${employee.cell}</p>
        <p>${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>   
        <p>Birthday: ${employee.dob.date.slice(5, 7)}/${employee.dob.date.slice(8,10)}/${employee.dob.date.substr(0,4)} 
        </div>
        </div>
        </div>
        `;
      
   //     var employeeProfile = employeeDiv.childNodes;
//      for (var i; i < employeeDiv.length; i++) {
     //     employeeProfile.setAttribute('id','employee-i');
  //   };   
      employeeDiv.classList.add("employee");
      parentDiv.appendChild(employeeDiv);
  }));
  
/* ***********
MODAL
*********** */
window.onload = function() {
  document.getElementById('modal').style.display = "none"
} 



  document.getElementById('employees').addEventListener("click", (e) => {
    document.getElementById('modal-text').innerHTML = event.target.innerHTML;
    // console.log(event.target.parentNode.nextSibling.innerHTML)
    event.target.parentNode.setAttribute('id', 'selection10');
    if (document.getElementById('modal').style.display == "none") {
     document.getElementById('modal').style.display = "block";
     
   }
   });

document.getElementById('modal-x').addEventListener("click", (e) => {
  if (document.getElementById('modal').style.display == "block") {
    document.getElementById('modal').style.display = "none";
  //  document.getElementById('selection').removeAttribute('id');
  // remove all ID starting w "selection"
  }  
}); 

/* *****************
NAVIGATE MODAL 
***************** */
var counter = 10

document.getElementById('left').addEventListener("click", (e) => {
  
  document.getElementById('modal-text').innerHTML = document.getElementById(`selection${counter}`).previousElementSibling.innerHTML;
  var newSelection = document.getElementById(`selection${counter}`).previousElementSibling;
  counter--;
  newSelection.setAttribute("id", `selection${counter}`); 
});

document.getElementById('right').addEventListener("click", (e) => {
  document.getElementById('modal-text').innerHTML = document.getElementById(`selection${counter}`).nextElementSibling.innerHTML;
  var newSelection = document.getElementById(`selection${counter}`).nextElementSibling;
  counter++;
  newSelection.setAttribute("id", `selection${counter}`); 
});

/* **********
AUTOCOMPLETE SEARCH
************** */

const searchBar = document.getElementById("searchBar");
var items = document.getElementsByClassName('name');
var itemsParent = document.getElementsByClassName('employee');


searchBar.addEventListener('keyup', myFunction);

function myFunction() {
    searchBar.value = searchBar.value.toLowerCase();
    var mySearch = searchBar.value;
    console.log(mySearch);

    for (var i = 0; i < items.length; i += 1) {
        var title = items[i].innerHTML;
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(title);
        if (alphabet.includes(title.charAt(0)) == false) {
        itemsParent[i].style.display = "none";
        }
         if (title.startsWith(mySearch)) {
           itemsParent[i].style.display = "";
            } else {
         itemsParent[i].style.display = "none";
        }
}
}
;
