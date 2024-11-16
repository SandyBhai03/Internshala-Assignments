// DOM Element Selection
const submitBtn = document.getElementById("submit-btn");
const sName = document.getElementById("sname");
const sId = document.getElementById("sid");
const sEmail = document.getElementById("semail");
const sContact = document.getElementById("scontact");
const sCourse = document.getElementById("scourse");
const registeredStudentsDiv = document.getElementById("resgister-students-table");

// Regular expressions for validation
const nameRegex = /^[A-Za-z\s]+$/;
const idRegex = /^[0-9]+$/; // Numbers only (allows leading zeros)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactRegex = /^[0-9]+$/; // Numbers only

// Track index of student being edited, if any
let editIndex = null;

// Load students from local storage on page load
document.addEventListener("DOMContentLoaded", displayStudents);

// Event listener for the "Add Student" button
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Validate input fields
  if (!validateInputs()) return;

  // Create new student object
  const student = {
    id: editIndex !== null ? sId.value : Date.now().toString(), // Use timestamp ID or current index if editing
    name: sName.value,
    email: sEmail.value,
    contact: sContact.value,
    course: sCourse.value
  };

  // Retrieve existing students from localStorage
  let studentsList = JSON.parse(localStorage.getItem("studentsList")) || [];

  // Update student if editing, else add new
  if (editIndex !== null) {
    studentsList[editIndex] = student;
    editIndex = null; // Reset edit index after updating
  } else {
    studentsList.push(student);
  }

  // Save updated list to localStorage
  localStorage.setItem("studentsList", JSON.stringify(studentsList));

  // Clear form fields
  clearForm();

  // Update the displayed student list
  displayStudents();
});

// Validate input fields
function validateInputs() {
  if (
    sName.value === "" ||
    sId.value === "" ||
    sEmail.value === "" ||
    sContact.value === "" ||
    sCourse.value === ""
  ) {
    alert("Please fill in all fields before adding student details.");
    return false;
  }
  if (!nameRegex.test(sName.value)) {
    alert("Please enter a valid name (letters and spaces only).");
    return false;
  }
  if (!idRegex.test(sId.value)) {
    alert("Please enter a valid student ID (numbers only).");
    return false;
  }
  if (!emailRegex.test(sEmail.value)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!contactRegex.test(sContact.value)) {
    alert("Please enter a valid contact number (numbers only).");
    return false;
  }
  return true;
}

// Clear form fields
function clearForm() {
  sName.value = "";
  sId.value = "";
  sEmail.value = "";
  sContact.value = "";
  sCourse.value = "";
}

// Display students from localStorage
function displayStudents() {
  registeredStudentsDiv.innerHTML = ""; // Clear existing content

  const studentsList = JSON.parse(localStorage.getItem("studentsList")) || [];
  studentsList.forEach((student, idx) => {
    let studentDiv = document.createElement("div");
    studentDiv.classList.add("student-details");
    studentDiv.innerHTML = `<div
                id="student-details"
                class="student-details font-medium grid grid-cols-[130px_90px_230px_110px_240px_70px_70px] grid-rows-1 gap-3 border-[1.5px] bg-[rgba(244,244,244,.3)] border-[rgba(244,244,244,.7)] px-5 py-2 mb-2 rounded"
              >
                <span id="student-name"
                  class="bg-gradient-to-r from-pink-600 via-red-600 to-green-600 text-transparent bg-clip-text"
                >
                  ${student.name}
                </span>
                <span id="student-id"
                  class="bg-gradient-to-r from-pink-600 via-red-600 to-green-600 text-transparent bg-clip-text"
                >
                  ${student.id}
                </span>
                <span id="student-email"
                  class="bg-gradient-to-r from-pink-600 via-red-600 to-green-600 text-transparent bg-clip-text">
                  ${student.email}
                  </span
                >
                <span id="student-contact"
                  class="bg-gradient-to-r from-pink-600 via-red-600 to-green-600 text-transparent bg-clip-text"
                >
                  ${student.contact}
                </span>
                <span id="student-course"
                  class="bg-gradient-to-r from-pink-600 via-red-600 to-green-600 text-transparent bg-clip-text"
                >
                  ${student.course}
                </span>
                <button id="edit-btn"
                class="edit-btn w-fit px-3">
                  <i class="fa-solid fa-pen-to-square">
                  </i></button>
                <button id="delete-btn"
                class="delete-btn w-fit px-5">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>`;

    // Append student to display div
    registeredStudentsDiv.appendChild(studentDiv);

    // Edit and Delete button functionality
    studentDiv.querySelector(".edit-btn").addEventListener("click", () => editStudent(idx));
    studentDiv.querySelector(".delete-btn").addEventListener("click", () => deleteStudent(idx));
  });
}

// Delete student function
function deleteStudent(idx) {
  let studentsList = JSON.parse(localStorage.getItem("studentsList")) || [];
  studentsList.splice(idx, 1); // Remove student at index
  localStorage.setItem("studentsList", JSON.stringify(studentsList));
  displayStudents(); // Refresh display
}

// Edit student function
function editStudent(idx) {
  const studentsList = JSON.parse(localStorage.getItem("studentsList")) || [];
  const student = studentsList[idx];

  // Populate form with student data for editing
  sName.value = student.name;
  sId.value = student.id;
  sEmail.value = student.email;
  sContact.value = student.contact;
  sCourse.value = student.course;

  // Set editIndex to update instead of adding new student
  editIndex = idx;
}



