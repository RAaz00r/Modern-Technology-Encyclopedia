/*document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('submit');

    if (btn) {
        btn.addEventListener('click', function() {
            alert('Cette fonctionnalité est actuellement en développement. Veuillez réessayer plus tard.');
        });
    }
});*/

//////////////////////////////////////

const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

function verifierConnexion() {

    if (email.value !== "" && password.value !== "") {
        submit.disabled = false;
    }

    else {
        submit.disabled = true;
    }
}

submit.disabled = true;

email.addEventListener("input", verifierConnexion);
password.addEventListener("input", verifierConnexion);
