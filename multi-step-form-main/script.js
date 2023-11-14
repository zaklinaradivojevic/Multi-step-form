document.addEventListener('DOMContentLoaded', function () {
  
  
  let currentStep = 1;
  const formSteps = document.querySelectorAll('.formStep');

  function showStep(step) {
    formSteps.forEach((stepElement) => {
      stepElement.style.display = 'none';
    });

    const currentStepElement = document.querySelector(`.formStep[data-step="${step}"]`);
    currentStepElement.style.display = 'block';
  }

  function nextStep() {
    if (currentStep < formSteps.length) {
      currentStep++;
      showStep(currentStep);
      updateSidebar(currentStep);
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      updateSidebar(currentStep);
    }
  }

  function updateSidebar(step) {
    const sidebarBtns = document.querySelectorAll('.sidebar-btn');
    sidebarBtns.forEach((btn, index) => {
      if (index + 1 === step) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Attach event listeners to "Next Step" and "Go Back" buttons
  const nextButton = document.querySelector('.next-button');
  const nextButton2 = document.querySelector('.next-button2');
  const backButton = document.querySelector('.back-button');

  if (nextButton) {
    nextButton.addEventListener('click', nextStep);
  }

  if (nextButton2) {
    nextButton2.addEventListener('click', nextStep);
  }

  if (backButton) {
    backButton.addEventListener('click', prevStep);
  }

  // Initialize the form by showing the first step
  showStep(currentStep);
  updateSidebar(currentStep);
});
