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
        <div>
        `;
      employeeDiv.classList.add("employee");
      parentDiv.appendChild(employeeDiv);
  }));
  

