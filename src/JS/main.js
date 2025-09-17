import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../CSS/style.css';
import axios from 'axios';
import '@google/model-viewer';

axios.get("https://gasserzayed.vercel.app/assets/projects.json")
.then((projects)=>{
    for(let project of projects.data){
        document.getElementById("cards").innerHTML += `
            <div class="d-flex flex-wrap gap-2 justify-content-center mb-lg-2 col-12 col-md-5 mb-5 col-lg-3 align-items-center">
                <div class="card" >
                <img src="${project.image}" alt="t">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="${project.github}" target="_blank"><i class="fa-brands fs-4 text-primary fa-github"></i></a>
                    <a href="${project.url}" target="_blank"><i class="fa-solid fs-4 text-primary fa-globe"></i></a>
                </div>
            </div>
        `;
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let phoneNumber = "201210198741";

    let text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  });
});
