function sanitizeInput(input) {
  // to prevent XSS
  const tempDiv = document.createElement("div");
  tempDiv.innerText = input;
  return tempDiv.innerHTML; // Returns escaped text
}
document.getElementById("loginBtn").addEventListener("click", function () {
  // Get the input values
  const nationalId = document.getElementById("National id").value;
  const password = document.getElementById("password").value;
  // sanitizing the input
  nationalId = sanitizeInput(nationalId);
  password = sanitizeInput(password);

  // we need to avoid logging for xss attacks
  // console.log("National ID:", nationalId);
  // console.log("Password:", password);

  if (!nationalId || !password) {
    alert("Please fill in both National ID and Password.");
    return;
  }

  // saving to local storage
  localStorage.setItem("nationalId", nationalId);
  localStorage.setItem("password", password);

  
  alert("Logging in ... "); // i will delete this at the end
});
document.getElementById("registerbtn").addEventListener("click", function () {
  window.location.href = "register.html"; 
  // window.location.href = "javascript:alert(1)"; # XSS
});
