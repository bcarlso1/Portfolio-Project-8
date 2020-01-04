const employeeDiv = document.getElementById('employees');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
    .then((resp) => resp.json()) 
    .then(data => generateImage(data.message))
    .catch(function(error) {
        console.log(error);
    });

    function generateImage(data) {
        const html = `
        <img src="${data}">
        `;
        employeeDiv.innerHTML = html;

    }