// Get references to the form elements
const registerBtn = document.getElementById("registerBtn");
const fullName = document.getElementById("fullName");
const nationalId = document.getElementById("nationalId");
const birthdate = document.getElementById("birthdate");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");

// sanitizing the  inputs 
function sanitizeInput(input) {
  const element = document.createElement('div');
  if (input) {
    element.innerText = input;
    element.textContent = input;
    return element.innerHTML; // Return sanitized input
  }
  return "";
}


registerBtn.addEventListener("click", function(event) {
  event.preventDefault();

  
  const fullNameValue = sanitizeInput(fullName.value.trim());
  const nationalIdValue = sanitizeInput(nationalId.value.trim());
  const birthdateValue = sanitizeInput(birthdate.value);
  const phoneNumberValue = sanitizeInput(phoneNumber.value.trim());
  const passwordValue = sanitizeInput(password.value);


  const accountTypeElement = document.querySelector('input[name="accountType"]:checked');
  let accountTypeValue = null;

  
  let isValid = true;
  let errorMessage = "";

  if (nationalIdValue.length < 5) {
    isValid = false;
    errorMessage += "National ID must be at least 5 characters long.\n";
  }

  if (passwordValue.length < 6) {
    isValid = false;
    errorMessage += "Password must be at least 6 characters long.\n";
  }

  
  if (!/^[0-9]+$/.test(phoneNumberValue)) {
    isValid = false;
    errorMessage += "Phone number must contain only numbers.\n";
  }

  if (accountTypeElement) {
    
    accountTypeValue = accountTypeElement.value === "user" ? 0 : 1;
  } else {
    isValid = false;
    errorMessage += "Choose account type please.\n"; 
  }

  if (!isValid) {
    alert(errorMessage);
  } else {
    alert("Form is valid, submiting the data to server...");

    
    const formData = {
      fullName: fullNameValue,
      nationalId: nationalIdValue,
      birthdate: birthdateValue,
      phoneNumber: phoneNumberValue,
      accountType: accountTypeValue, // 0 for personal, 1 for admin
    };


  }
});


document.getElementById("loginbtn").addEventListener("click", function () {
  
  window.location.href = "login_page.html"; 
  //  window.location.href = "javascript:alert(1)" as it can trigger XSS vulnerabilities
});
