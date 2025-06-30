document.addEventListener("DOMContentLoaded", function () {
  const navButtons = document.querySelectorAll(".nav-list-button");
  const sectionMap = {
    Home: "about",
    Skills: "skills",
    Projects: "projects",
    Certifications: "certificates",
    "Contact Me": "contact",
  };

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.textContent.trim();
      const sectionId = sectionMap[target];

      if (sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_8xg0o2d", "template_rubidb5", this).then(
      function () {
        const messageDiv = document.getElementById("form-message");
        messageDiv.textContent = "Message sent successfully!";
        messageDiv.classList.remove("error");
        form.reset();
      },
      function (error) {
        messageDiv.textContent = "Failed to send message. Please try again.";
        messageDiv.classList.add("error");
        console.error(error);
      }
    );
  });
});

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});
