function scrollToContact() {
  const contact = document.getElementById("contact");

  if (contact) {
    contact.scrollIntoView({ behavior: "smooth" });
  }
}



const form = document.getElementById("contactForm");
const statusBox = document.getElementById("status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

  
    if (statusBox) {
      statusBox.innerText = "Sending message...";
      statusBox.style.color = "orange";
    }

    
    setTimeout(() => {

      if (statusBox) {
        statusBox.innerText = "Message sent successfully!";
        statusBox.style.color = "green";
      }

      form.reset();

      
      setTimeout(() => {
        if (statusBox) {
          statusBox.innerText = "";
        }
      }, 3000);

    }, 1000);
  });
}const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");

  currentSlide++;
  if(currentSlide >= slides.length){
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}, 4000); 
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  if (slides.length === 0) return;

  setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

  }, 3000);

});