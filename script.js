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
}