// Add an event listener to the login button
document.getElementById("loginBtn").addEventListener("click", function () {
    // Get the input values
    const nationalId = document.getElementById("National id").value;
    const password = document.getElementById("password").value;
  
    // Save the values (for now, just log them)
    console.log("National ID:", nationalId);
    console.log("Password:", password);
  
    // Optionally, validate the input
    if (!nationalId || !password) {
      alert("Please fill in both National ID and Password.");
      return;
    }
  
    // Example: Save to local storage (if needed)
    localStorage.setItem("nationalId", nationalId);
    localStorage.setItem("password", password);
  
    // Example: You can redirect or process the login logic here
    alert("Login details captured successfully!");
  });
  // Add an event listener to the register button
document.getElementById("registerbtn").addEventListener("click", function () {
  // Navigate to the desired page
  window.location.href = "register.html"; // Replace 'register.html' with your target page
});

  