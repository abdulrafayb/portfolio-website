/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_jxditki",
      "template_76k7k9h",
      "#contact-form",
      "dZ9oq7jDYGjxHtpFg"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message sent successfully.";

        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);

        // clearing input fields
        contactForm.reset();
      },
      () => {
        // show error message
        contactMessage.textContent = "Message not sent (Service error)";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
