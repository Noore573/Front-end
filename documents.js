// Dummy Data
const dummyData = [
  {
    nationalID: "12345",
    username: "John Doe",
    filename: "Document1.pdf",
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

function renderDocuments(data) {
  documentsList.innerHTML = ""; // Clear existing content
  data.forEach((doc) => {
    const docItem = document.createElement("div");
    docItem.className =
      "flex flex-col items-center justify-center p-4  rounded-lg shadow-md bg-gradient-to-bl from-white via-green-100  via-lthird via-10% to-lfourth";

    docItem.innerHTML = `
                    <div class="relative group flex flex-col mx-5  justify-center items-start rounded-lg  p-4 w-full h-full" >
        <!-- Download Icon -->
        <a href="#" class="absolute top-2 left-2 hidden group-hover:flex items-center justify-center bg-green-500 text-white rounded-full p-2 hover:bg-green-700 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 11-2 0V5H5v10h6a1 1 0 110 2H4a1 1 0 01-1-1V4zm13.293 7.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L12 13.586V9a1 1 0 112 0v4.586l1.293-1.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        </a>
        <div class="flex flex-col items-start  justify-center  w-full mx-20">
        <img src="assets/output-onlinegiftools.gif" alt="Profile Icon" class="h-32 w-32 mb-4 ">
        <div class="flex flex-col items-center justify-center    ">
            <p class="text-sm font-bold text-green-700">Username: ${doc.username}</p>
            <p class="text-sm text-green-700 truncate w-full" title="${doc.filename}">National ID: ${doc.nationalID}</p>
            <p class="text-sm text-green-700 truncate w-full" title="${doc.filename}">File: ${doc.filename}</p>
            <p class="text-sm text-green-700">Uploaded: ${doc.dateUploaded}</p>
        </div>
        </div>
    </div>
                `;

    documentsList.appendChild(docItem);
  });
}

// Search Functionality (Filter by National ID)
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim();
  const filteredData = dummyData.filter((doc) =>
    doc.nationalID.includes(searchTerm)
  );
  renderDocuments(filteredData);
});

// Initial render
renderDocuments(dummyData);
document.getElementById("Loginbtn").addEventListener("click", function () {
    // Navigate to the desired page
    window.location.href = "login_page.html"; // Replace 'register.html' with your target page
  });