import {isUrlValid} from "./validationHandler";

async function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("error-display").style.display = "none";

    const defaultValue = '-';
    const urlString = document.getElementById('url').value;

    if (!isUrlValid(urlString)) {
        document.getElementById("error-display").innerHTML = "Please insert correct URL format!!";
        document.getElementById("error-display").style.color = "red";
        document.getElementById("error-display").style.display = "block";
        clearTextInnerHTML();
        return;
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlString })
    };
    console.log("::: Form Submitted :::")
    try {
        document.getElementById("submit").disabled = "true";
        document.getElementById("submit").innerHTML = "Loading...";
        const response= await fetch('http://localhost:8081/api', options);
        document.getElementById("submit").removeAttribute("disabled");
        document.getElementById("submit").innerHTML = "Submit";

        const { status, agreement, subjectivity, confidence, irony, score_tag } = await response.json();
        if (status.msg !== 'OK') {
            document.getElementById("error-display").innerHTML = status.msg;
            document.getElementById("error-display").style.color = "blue";
            clearTextInnerHTML();
        }

        document.getElementById('agreement').innerHTML = agreement || defaultValue;
        document.getElementById('subjectivity').innerHTML = subjectivity || defaultValue;
        document.getElementById('confidence').innerHTML = confidence || defaultValue;
        document.getElementById('irony').innerHTML = irony || defaultValue;
        document.getElementById('score_tag').innerHTML = score_tag || defaultValue;
    } catch (e) {
        console.log(e);
    }
}

function clearTextInnerHTML() {
    document.getElementById('agreement').innerHTML = "";
    document.getElementById('subjectivity').innerHTML = "";
    document.getElementById('confidence').innerHTML = "";
    document.getElementById('irony').innerHTML = "";
    document.getElementById('score_tag').innerHTML = "";
}

export { handleSubmit }
