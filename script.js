<<<<<<< Updated upstream
document.querySelector("button.button-menu-toggle")
.addEventListener("click",function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")
}
)


function showAlert() { alert("¡Hola, esta es una alerta desde JavaScrip!") 
}



if (form) {
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
})
}

const form= document.getElementById('myForm');

function validateEmail(email) {
const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
return regex.test(email)
}

function validateForm() {
    const emailInput= document.getElementById('email');
    const email= emailInput.value;

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

if (form) {
    form.addEventListener('submit', function (lala){
        lala.preventDefault()
        validateForm();
    })} 
=======
document.querySelector("button.button-menu-toggle")
.addEventListener("click",function() {
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")
}
)


function showAlert() { alert("¡Hola, esta es una alerta desde JavaScrip!") 
}



if (form) {
form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
})
}

const form= document.getElementById('myForm');

function validateEmail(email) {
const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
return regex.test(email)
}

function validateForm() {
    const emailInput= document.getElementById('email');
    const email= emailInput.value;

    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

if (form) {
    form.addEventListener('submit', function (lala){
        lala.preventDefault()
        validateForm();
    }) 
}

>>>>>>> Stashed changes
