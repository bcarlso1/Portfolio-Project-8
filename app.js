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
        `<img src="${employee.picture.medium}">
        <div class="info">
        <h4>${employee.name.first} ${employee.name.last}</h4>
          <p>${employee.email}</p>
          <p>${employee.location.city}</p>
        <div class="more-detail">
        <hr>
        <p>${employee.cell}</p>
        <p>${employee.location.street.name} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>   
        <p>Birthday: ${employee.dob.date.slice(5, 7)}/${employee.dob.date.slice(8,10)}/${employee.dob.date.substr(0,4)} 
        </div>
        </div>
        `;
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
    if (document.getElementById('modal').style.display == "none") {
     document.getElementById('modal').style.display = "block";
     
   }
   });

document.getElementById('modal-x').addEventListener("click", (e) => {
  if (document.getElementById('modal').style.display == "block") {
    document.getElementById('modal').style.display = "none";
  }  
}); 

/* *****************
NAVIGATE MODAL 
***************** */


document.getElementById('left').addEventListener("click", (e) => {
  alert("navigate to previous");

});

document.getElementById('right').addEventListener("click", (e) => {
  alert("navigate to next");

});

/* **********
AUTOCOMPLETE SEARCH
************** */


const names = [
  {name: "Victoria Chambers"},
  {name: "Dale Byrd"},
  {name: "Dawn Wood"},
  {name: "Dan Oliver"}
];

const searchBar = document.getElementById("searchBar");
const suggestionsDiv = document.getElementById("suggestions");

searchBar.addEventListener("keyup", function(){
  const input = searchBar.value;
  if (input == "") {
      suggestionsDiv.innerHTML = "";
  }
  suggestionsDiv.innerHTML = "";
  const suggestions = names.filter(function(person) {
      return person.name.toLowerCase().startsWith(input);
    })
    suggestions.forEach(function(suggested) {
          const div = document.createElement('div');
          div.innerHTML = suggested.name;
          suggestionsDiv.appendChild(div);
    });
    if (input == "") {
      suggestionsDiv.innerHTML = "";
  }
});

suggestionsDiv.addEventListener("click", function(event){
  var divText = event.target.innerHTML;
  searchBar.value = divText;
  suggestionsDiv.innerHTML = "";
});

