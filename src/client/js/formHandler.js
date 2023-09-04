import {checkForName} from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ txt: formText })
    })
    .then(res => res.json())
    .then(function(res) {
        const jsonString = JSON.stringify(res, null, 2);
        const preElement = document.createElement('pre');
        preElement.textContent = jsonString;
        document.getElementById('results').appendChild(preElement);
    })
}

export { handleSubmit }
