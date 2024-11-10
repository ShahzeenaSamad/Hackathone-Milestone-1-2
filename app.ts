
// Select the button and the skills section
const toggleButton = document.querySelector('#toggleSkillsButton') as HTMLButtonElement | null;
const skillsSection = document.querySelector('.about.skills') as HTMLElement | null;

// Function to toggle visibility of the skills section
const toggleSkillsVisibility = () => {
  if (skillsSection && toggleButton) {
    if (skillsSection.style.display === 'none') {
      skillsSection.style.display = 'block';
      toggleButton.textContent = 'Hide Skills';
    } else {
      skillsSection.style.display = 'none';
      toggleButton.textContent = 'Show Skills';
    }
  } else {
    console.error('Button or Skills section not found');
  }
};

// Attach event listener to the button
if (toggleButton) {
  toggleButton.addEventListener('click', toggleSkillsVisibility);
} else {
  console.error('Button with id "toggleSkillsButton" not found');
}


