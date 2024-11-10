// Select the button and the skills section
var toggleButton = document.querySelector('#toggleSkillsButton');
var skillsSection = document.querySelector('.about.skills');
// Function to toggle visibility of the skills section
var toggleSkillsVisibility = function () {
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
    else {
        console.error('Button or Skills section not found');
    }
};
// Attach event listener to the button
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkillsVisibility);
}
else {
    console.error('Button with id "toggleSkillsButton" not found');
}
