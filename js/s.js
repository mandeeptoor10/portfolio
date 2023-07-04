// JavaScript code for the header section
function setActiveMenuItem() {
    var currentPage = window.location.pathname;
    var menuItems = document.querySelectorAll(".nav ul li a");
  
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];
      if (menuItem.getAttribute("href") === currentPage) {
        menuItem.classList.add("active");
      } else {
        menuItem.classList.remove("active");
      }
    }
  }
  
  window.addEventListener("DOMContentLoaded", setActiveMenuItem);
  
  // JavaScript code for the hero section
  function resizeHeroSection() {
    var heroSection = document.querySelector(".hero");
    var windowHeight = window.innerHeight;
  
    heroSection.style.height = windowHeight + "px";
  }
  
  window.addEventListener("DOMContentLoaded", resizeHeroSection);
  window.addEventListener("resize", resizeHeroSection);
  
  // JavaScript code for the skills section
  function setActiveProfile() {
    var profileImage = document.querySelector(".profile-image");
    var profileInfo = document.querySelector(".profile-info");
  
    var isActive = true; // Change this condition as per your requirements
  
    if (isActive) {
      profileImage.classList.add("active");
      profileInfo.classList.add("active");
    } else {
      profileImage.classList.remove("active");
      profileInfo.classList.remove("active");
    }
  }
  
  window.addEventListener("DOMContentLoaded", setActiveProfile);
  
  // JavaScript code for the projects section
  function openGitHubLinks() {
    var gitHubLinks = document.querySelectorAll(".project a");
  
    for (var i = 0; i < gitHubLinks.length; i++) {
      var link = gitHubLinks[i];
      link.target = "_blank"; // Open link in a new tab
    }
  }
  
  window.addEventListener("DOMContentLoaded", openGitHubLinks);
  
  // JavaScript code for the contact section
  function submitForm(event) {
    event.preventDefault();
  
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("messageError");
  
    var isValid = true;
  
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required";
      isValid = false;
    } else {
      messageError.textContent = "";
    }
  
    if (isValid) {
      // Perform form submission or any other desired action
    }
  }
  
  // Example: Attach the submitForm function to the form's submit event
  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", submitForm);
// JavaScript code for the data analysis portfolio

// Function to display a greeting message in the console
function greet() {
  console.log("Welcome to the Data Analysis Portfolio!");
}

// Function to submit the contact form using AJAX
function submitForm(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  var isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  } else {
    messageError.textContent = "";
  }

  if (isValid) {
    var formData = new FormData();
    formData.append("name", nameInput.value);
    formData.append("email", emailInput.value);
    formData.append("message", messageInput.value);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process.php", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Process the response from the PHP file
        console.log(xhr.responseText);
        // You can update the UI or perform other actions based on the response
      }
    };

    xhr.send(formData);
  }
}

// Call the greet function on page load
window.addEventListener("DOMContentLoaded", greet);

// Example: Attach the submitForm function to the form's submit event
var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", submitForm);
