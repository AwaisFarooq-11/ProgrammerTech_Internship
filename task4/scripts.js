// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
  
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;

          if (username && password) {
              alert("Login successful!");
          } else {
              alert("Please fill in all fields.");
          }
      });
  }

  if (signupForm) {
      signupForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          if (username && email && password) {
              alert("Sign up successful!");
          } else {
              alert("Please fill in all fields.");
          }
      });
  }
});

function includeHTML() {
  const elements = document.querySelectorAll('[w3-include-html]');
  elements.forEach((element) => {
      const file = element.getAttribute('w3-include-html');
      fetch(file)
          .then(response => response.text())
          .then(data => {
              element.outerHTML = data;
              includeHTML();
          });
  });
}
