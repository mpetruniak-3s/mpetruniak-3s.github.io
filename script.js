// Store answers for the form steps
let answers = {};

// Move to next step
function nextStep(step) {
    const currentStep = document.getElementById(`step${step}`);
    const nextStep = document.getElementById(`step${step + 1}`);
    currentStep.style.display = "none";
    nextStep.style.display = "block";
}

// Set answer for yes/no or button inputs
function setAnswer(value, step) {
    answers[`step${step}`] = value;
    nextStep(step);
}

// Handle form submission
document.getElementById("consultationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form Submitted with answers:", answers);
    alert("Form submitted! We'll get in touch with you soon.");
});
