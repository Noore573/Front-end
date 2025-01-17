const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");
const fileNameElement = document.getElementById("fileName");
const fileSizeElement = document.getElementById("fileSize");

let uploadedFile = null; // Variable to store the uploaded file reference

// File icons mapping
const fileIcons = {
  "application/pdf": "https://cdn-icons-png.flaticon.com/512/337/337946.png", // PDF icon
  "application/msword": "https://cdn-icons-png.flaticon.com/512/337/337932.png", // DOC icon
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://cdn-icons-png.flaticon.com/512/337/337932.png", // DOCX icon
};

// When the gray box is clicked, trigger the hidden file input
uploadBox.addEventListener("click", () => {
  fileInput.click();
});

// When a file is selected
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    // Validate file type
    const allowedTypes = Object.keys(fileIcons);
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a valid PDF or DOC file.");
      fileInput.value = ""; // Clear the input
      return;
    }

    // Save the file reference locally for later API use
    uploadedFile = file;

    // Replace the gray box content with the file icon
    const fileIconSrc = fileIcons[file.type];
    const fileIcon = document.createElement("img");
    fileIcon.src = fileIconSrc;
    fileIcon.alt = "File Icon";
    fileIcon.className = "h-16 w-16";

    // Add a label for the uploaded file
    const fileLabel = document.createElement("span");
    fileLabel.textContent = file.name;
    fileLabel.className = "text-gray-700 text-sm mt-2 text-center no-scrollbar";

    // Clear existing content and append the file icon and label
    uploadBox.innerHTML = "";
    uploadBox.appendChild(fileIcon);
    uploadBox.appendChild(fileLabel);

    // Update the file name and size information
    fileNameElement.textContent = `File name: ${file.name}`;
    fileSizeElement.textContent = `File size: ${(file.size / 1024).toFixed(2)} KB`;

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