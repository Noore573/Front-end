// Get references to the form elements
const registerBtn = document.getElementById("registerBtn");
const fullName = document.getElementById("fullName");
const nationalId = document.getElementById("nationalId");
const birthdate = document.getElementById("birthdate");
const phoneNumber = document.getElementById("phoneNumber");

// Add event listener to the register button
registerBtn.addEventListener("click", function(event) {
  event.preventDefault();

  // Get values from form fields
  const fullNameValue = fullName.value.trim();
  const nationalIdValue = nationalId.value.trim();
  const birthdateValue = birthdate.value;
  const phoneNumberValue = phoneNumber.value.trim();

  // Get account type
  const accountTypeElement = document.querySelector('input[name="accountType"]:checked');
  let accountTypeValue = null;

  

  // Form validation
  let isValid = true;
  let errorMessage = "";

  if (nationalIdValue.length < 5) {
    isValid = false;
    errorMessage += "National ID must be at least 5 characters long.\n";
  }

  const password = document.getElementById("password");
  if (password.value.length < 6) {
    isValid = false;
    errorMessage += "Password must be at least 6 characters long.\n";
  }

  if (!/^[0-9]+$/.test(phoneNumberValue)) {
    isValid = false;
    errorMessage += "Phone number must contain only numbers.\n";
  }
  if (accountTypeElement) {
    // Map account type to corresponding ID
    accountTypeValue = accountTypeElement.value === "user" ? 0 : 1;
  } else {
    isValid = false;
    errorMessage += "choose account type please.\n";// Exit the function if account type is not selected
  }
  

  if (!isValid) {
    alert(errorMessage);
  } else {
    alert("Form is valid, submit data to server...");

    // Example: Prepare data for submission
    const formData = {
      fullName: fullNameValue,
      nationalId: nationalIdValue,
      birthdate: birthdateValue,
      phoneNumber: phoneNumberValue,
      accountType: accountTypeValue, // 0 for personal, 1 for admin
    };
    

    console.log("Form Data:", formData);

    // You can now send `formData` to your server via an API request
  }
});
