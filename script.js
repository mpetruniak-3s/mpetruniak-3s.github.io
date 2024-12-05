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
    alert("Form submitted! We will get in touch with you soon.");
});

function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission
  
    // Custom submission logic
    console.log("Form Submitted!");
  
    // Optionally, send data to the server or perform other actions
    const formData = new FormData(document.getElementById('consultationForm'));
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    // If you want to submit the form to the server manually (without reload)
    // You can use fetch or XMLHttpRequest for AJAX submission
  }