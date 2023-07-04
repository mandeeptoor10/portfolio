// Example JavaScript code for the header section (can be customized as per requirements)

// Function to highlight the active menu item
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

// Call the setActiveMenuItem function on page load
window.addEventListener("DOMContentLoaded", setActiveMenuItem);


//  JavaScript code for the hero section (can be customized as per requirements)

// Function to resize the hero section based on the window height
function resizeHeroSection() {
  var heroSection = document.querySelector(".hero");
  var windowHeight = window.innerHeight;

  heroSection.style.height = windowHeight + "px";
}

// Call the resizeHeroSection function on page load and window resize
window.addEventListener("DOMContentLoaded", resizeHeroSection);
window.addEventListener("resize", resizeHeroSection);


// skiils sections
// Function to highlight the active profile
function setActiveProfile() {
  var profileImage = document.querySelector(".profile-image");
  var profileInfo = document.querySelector(".profile-info");

  // Example: Toggle active profile based on a condition
  var isActive = true; // Change this condition as per your requirements

  if (isActive) {
      profileImage.classList.add("active");
      profileInfo.classList.add("active");
  } else {
      profileImage.classList.remove("active");
      profileInfo.classList.remove("active");
  }
}

// Call the setActiveProfile function on page load
window.addEventListener("DOMContentLoaded", setActiveProfile);

// projects sections 
// Function to open GitHub repository links in a new tab
function openGitHubLinks() {
  var gitHubLinks = document.querySelectorAll(".project a");

  for (var i = 0; i < gitHubLinks.length; i++) {
      var link = gitHubLinks[i];
      link.target = "_blank"; // Open link in a new tab
  }
}

// Call the openGitHubLinks function on page load
window.addEventListener("DOMContentLoaded", openGitHubLinks);

// contact us 

// Function to submit the contact form
function submitForm(event) {
  event.preventDefault();
  
  // Example: Validate form fields before submission
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var messageError = document.getElementById("messageError");

  // Example validation logic (replace with your own validation rules)
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
// JavaScript code for the data analysis portfolio

// Function to display a greeting message in the console
function greet() {
  console.log("Welcome to the Data Analysis Portfolio!");
}

// Call the greet function on page load
window.addEventListener("DOMContentLoaded", greet);
