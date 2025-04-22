// Simulate a simple login authentication process
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Basic authentication logic (for demo purposes)
  if (username === "user@example.com" && password === "Password123") {
    window.location.href = "home.html";  // Redirect to home page on success
  } else {
    errorMessage.textContent = "Invalid username or password.";  // Show error message
  }
});
