function showSection(sectionId) {
  // Hide all question sections
  const sections = document.querySelectorAll(".question-section");
  sections.forEach(section => section.style.display = "none");

  // Display the selected section
  document.getElementById(sectionId).style.display = "block";
}
