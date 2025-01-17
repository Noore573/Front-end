// Dummy Data
const dummyData = [
  {
    nationalID: "58194",
    username: "John Doe",
    // username: "<script>alert('XSS Attack!');</script>",
    // filename: "<a href=\"javascript:alert('XSS Attack!')\">Click here</a>",

    filename: "Document1.pdf",
    // filename: "Document.pdf\" onmouseover=\"alert('XSS Attack!')",
    
    
    dateUploaded: "2025-01-01",
  },
  {
      nationalID: "67890",
      username: "Jane Smith",
    filename: "Report.docx",
    dateUploaded: "2025-01-02",
  },
  {
    nationalID: "54321",
    username: "Emily Davis",
    filename: "Notes.pdf",
    dateUploaded: "2025-01-03",
  },
  {
    nationalID: "98765",
    username: "Michael Brown",
    filename: "Assignment.doc",
    dateUploaded: "2025-01-04",
  },
  {
    nationalID: "11223",
    username: "Sarah Wilson",
    filename: "Thesis.pdf",
    dateUploaded: "2025-01-05",
  },
  {
    nationalID: "33445",
    username: "Chris Johnson",
    filename: "Project.docx",
    dateUploaded: "2025-01-06",
  },
  {
    nationalID: "66789",
    username: "Anna Lee",
    filename: "Agenda.pdf",
    dateUploaded: "2025-01-07",
  },
  {
    nationalID: "77890",
    username: "Paul Garcia",
    filename: "Summary.doc",
    dateUploaded: "2025-01-08",
  },
  {
    nationalID: "88900",
    username: "Laura White",
    filename: "Draft.docx",
    dateUploaded: "2025-01-09",
  },
  {
    nationalID: "99112",
    username: "Ethan Harris",
    filename: "Proposal.pdf",
    dateUploaded: "2025-01-10",
  },
  {
    nationalID: "10112",
    username: "Sophia Clark",
    filename: "Research.pdf",
    dateUploaded: "2025-01-11",
  },
  {
    nationalID: "11134",
    username: "Liam Turner",
    filename: "Analysis.doc",
    dateUploaded: "2025-01-12",
  },
  {
    nationalID: "12145",
    username: "Isabella Scott",
    filename: "Outline.pdf",
    dateUploaded: "2025-01-13",
  },
  {
    nationalID: "13156",
    username: "Oliver Hill",
    filename: "Schedule.docx",
    dateUploaded: "2025-01-14",
  },
  {
    nationalID: "14167",
    username: "Mia Adams",
    filename: "Plan.pdf",
    dateUploaded: "2025-01-15",
  },
];
// Render Dummy Data
const documentsList = document.getElementById("documentsList");

function sanitizeHTML(str) {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}
/*
Replaced innerHTML with safe DOM manipulation methods (createElement, textContent, appendChild)
Used textContent and setAttribute to assign text and attributes safely. Even malicious input like
filename: "Document.pdf\" onmouseover=\"alert('XSS Attack!')" will now be treated as plain text.
*/
function renderDocuments(data) {
    documentsList.innerHTML = ""; // Clear existing content
    data.forEach((doc) => {
      const docItem = document.createElement("div");
      docItem.className =
        "flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-gradient-to-bl from-white via-green-100 via-lthird via-10% to-lfourth";
  
      // Create the inner structure
      const innerContainer = document.createElement("div");
      innerContainer.className =
        "relative group flex flex-col mx-5 justify-center items-start rounded-lg p-4 w-full h-full";
  
      // Add download icon
      const downloadIcon = document.createElement("a");
      downloadIcon.href = "#";
      downloadIcon.className =
        "absolute top-2 left-2 hidden group-hover:flex items-center justify-center bg-green-500 text-white rounded-full p-2 hover:bg-green-700 transition duration-200";
  
      const iconSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      iconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      iconSVG.setAttribute("class", "h-5 w-5");
      iconSVG.setAttribute("viewBox", "0 0 20 20");
      iconSVG.setAttribute("fill", "currentColor");
  
      const iconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      iconPath.setAttribute(
        "d",
        "M3 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 11-2 0V5H5v10h6a1 1 0 110 2H4a1 1 0 01-1-1V4zm13.293 7.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L12 13.586V9a1 1 0 112 0v4.586l1.293-1.293a1 1 0 011.414 0z"
      );
      iconPath.setAttribute("fill-rule", "evenodd");
      iconPath.setAttribute("clip-rule", "evenodd");
  
      iconSVG.appendChild(iconPath);
      downloadIcon.appendChild(iconSVG);
  
      // Add user details and profile image container
      const userContainer = document.createElement("div");
      userContainer.className = "flex flex-row items-center justify-center w-full gap-4";
  
      // Add profile image
      const profileImg = document.createElement("img");
      profileImg.src = "assets/output-onlinegiftools.gif";
      profileImg.alt = "Profile Icon";
      profileImg.className = "h-32 w-32 mb-4";
  
      // Add user details
      const userDetails = document.createElement("div");
      userDetails.className = "flex flex-col items-start justify-center";
  
      const username = document.createElement("p");
      username.className = "text-sm font-bold text-green-700";
      username.textContent = `Username: ${doc.username}`;
  
      const nationalID = document.createElement("p");
      nationalID.className = "text-sm text-green-700 truncate w-full";
      nationalID.textContent = `National ID: ${doc.nationalID}`;
  
      const filename = document.createElement("p");
      filename.className = "text-sm text-green-700 truncate w-full";
      filename.textContent = `File: ${doc.filename}`;
      filename.title = doc.filename; // Safely add as a title
  
      const dateUploaded = document.createElement("p");
      dateUploaded.className = "text-sm text-green-700";
      dateUploaded.textContent = `Uploaded: ${doc.dateUploaded}`;
  
      // Append details to userDetails div
      userDetails.appendChild(username);
      userDetails.appendChild(nationalID);
      userDetails.appendChild(filename);
      userDetails.appendChild(dateUploaded);
  
      // Add profileImg and userDetails into userContainer
      userContainer.appendChild(profileImg);
      userContainer.appendChild(userDetails);
  
      // Combine everything
      innerContainer.appendChild(downloadIcon);
      innerContainer.appendChild(userContainer);
      docItem.appendChild(innerContainer);
  
      documentsList.appendChild(docItem);
    });
  }
  
  
// function renderDocuments(data) {
//   documentsList.innerHTML = ""; // Clear existing content
//   data.forEach((doc) => {
//     const docItem = document.createElement("div");
//     docItem.className =
//       "flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-gradient-to-bl from-white via-green-100 via-lthird via-10% to-lfourth";

//     const sanitizedUsername = sanitizeHTML(doc.username);
//     const sanitizedNationalID = sanitizeHTML(doc.nationalID);
//     const sanitizedFilename = sanitizeHTML(doc.filename);
//     const sanitizedDateUploaded = sanitizeHTML(doc.dateUploaded);

//     docItem.innerHTML = `
//       <div class="relative group flex flex-col mx-5 justify-center items-start rounded-lg p-4 w-full h-full">
//         <!-- Download Icon -->
//         <a href="#" class="absolute top-2 left-2 hidden group-hover:flex items-center justify-center bg-green-500 text-white rounded-full p-2 hover:bg-green-700 transition duration-200">
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 11-2 0V5H5v10h6a1 1 0 110 2H4a1 1 0 01-1-1V4zm13.293 7.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L12 13.586V9a1 1 0 112 0v4.586l1.293-1.293a1 1 0 011.414 0z" clip-rule="evenodd" />
//           </svg>
//         </a>
//         <div class="flex flex-col items-start justify-center w-full mx-20">
//           <img src="assets/output-onlinegiftools.gif" alt="Profile Icon" class="h-32 w-32 mb-4">
//           <div class="flex flex-col items-center justify-center">
//             <p class="text-sm font-bold text-green-700">Username: ${sanitizedUsername}</p>
//             <p class="text-sm text-green-700 truncate w-full" title="${sanitizedFilename}">National ID: ${sanitizedNationalID}</p>
//             <p class="text-sm text-green-700 truncate w-full" title="${sanitizedFilename}">File: ${sanitizedFilename}</p>
//             <p class="text-sm text-green-700">Uploaded: ${sanitizedDateUploaded}</p>
//           </div>
//         </div>
//       </div>
//     `;

//     documentsList.appendChild(docItem);
//   });
// }

// Search Functionality (Filter by National ID)
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim();
  const sanitizedSearchTerm = sanitizeHTML(searchTerm); // Sanitize input
  const filteredData = dummyData.filter((doc) =>
    doc.nationalID.includes(sanitizedSearchTerm)
  );
  renderDocuments(filteredData);
});

// Initial render
renderDocuments(dummyData);

document.getElementById("Loginbtn").addEventListener("click", function () {
  // Navigate to the desired page
  window.location.href = "login_page.html"; 
});
