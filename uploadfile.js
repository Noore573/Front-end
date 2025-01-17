const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const fileNameElement = document.getElementById("fileName");
const fileSizeElement = document.getElementById("fileSize");

let uploadedFile = null; /// Variable to store the uploaded file reference

// File icons mapping
const fileIcons = {
  "application/pdf": "https://cdn-icons-png.flaticon.com/512/337/337946.png", // PDF icon
  "application/msword": "https://cdn-icons-png.flaticon.com/512/337/337932.png", // DOC icon
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "https://cdn-icons-png.flaticon.com/512/337/337932.png", // DOCX icon
};

function sanitizeInput(input) {
  const element = document.createElement("div");
  element.textContent = input; 
  return element.innerHTML;
}

uploadBox.addEventListener("click", () => {
  fileInput.click();
});
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) { //validating the file type
    
    const allowedTypes = Object.keys(fileIcons);
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a valid PDF , DOCS or DOC file.");
      fileInput.value = ""; 
      return;
    }

    // Save the file reference locally for later API use
    uploadedFile = file;

    // to display the icon in the ui
    const fileIconSrc = fileIcons[file.type];
    const fileIcon = document.createElement("img");
    fileIcon.src = fileIconSrc;
    fileIcon.alt = "File Icon";
    fileIcon.className = "h-16 w-16";

    // to display the file name 
    const fileLabel = document.createElement("span");
    fileLabel.textContent = sanitizeInput(file.name); 
    fileLabel.className = "text-gray-700 text-sm mt-2 text-center no-scrollbar";

    uploadBox.innerHTML = ""; //first we clean the initial text
    uploadBox.appendChild(fileIcon);
    uploadBox.appendChild(fileLabel);

    
    fileNameElement.textContent = `File name: ${sanitizeInput(file.name)}`;
    fileSizeElement.textContent = `File size: ${(file.size / 1024).toFixed(
      2
    )} KB`;

    console.log("File saved locally for later use:", uploadedFile);
  }
});
document.getElementById("Loginbtn").addEventListener("click", function () {
  // Navigate to the desired page
  window.location.href = "login_page.html"; // Replace 'register.html' with your target page
});
document.getElementById("Homebtn").addEventListener("click", function () {
  // Navigate to the desired page
  window.location.href = "login_page.html"; // Replace 'register.html' with your target page
});