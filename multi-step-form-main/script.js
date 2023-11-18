document.addEventListener('DOMContentLoaded', function () {

const checkboxes = document.querySelectorAll('.addon-checkbox');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const addon = checkbox.closest('.add-ons');
      if (addon) {
        if (checkbox.checked) {
          addon.classList.add('checked');
        } else {
          addon.classList.remove('checked');
        }
      } else {
        console.error("Addon container not found");
      }
    });
  });
  // Get all sidebar buttons
  const sidebarBtns = document.querySelectorAll('.sidebar-btn');

  // Function to handle sidebar button clicks
  function handleSidebarButtonClick(event) {
    const clickedStep = parseInt(event.target.textContent); // Get the step number from the clicked button
    showStep(clickedStep); // Show the corresponding step
    updateSidebar(clickedStep); // Update the active state of the sidebar buttons
  }

  // Attach click event listeners to sidebar buttons
  sidebarBtns.forEach(btn => {
    btn.addEventListener('click', handleSidebarButtonClick);
  });

  
  const switchToggle = document.getElementById('switch');
  const monthlyText = document.getElementById('monthlyText');
  const yearlyText = document.getElementById('yearlyText');

  switchToggle.addEventListener('change', function() {
    if (this.checked) {
      monthlyText.style.color = 'hsl(229, 24%, 87%)'; // Change the color as needed for Monthly text when unchecked
      yearlyText.style.color = 'hsl(213, 96%, 18%)'; // Change the color as needed for Yearly text when checked
    } else {
      monthlyText.style.color = 'hsl(213, 96%, 18%)'; // Change the color as needed for Monthly text when unchecked
      yearlyText.style.color = 'hsl(229, 24%, 87%)'; // Change the color as needed for Yearly text when checked
    }
  });

  // Get all elements with class name 'select-plan'
  const selectPlans = document.querySelectorAll('.select-plan');

  // Function to handle the click event on each select-plan element
  function handlePlanClick() {
    // Remove 'selected' class from all select-plan elements
    selectPlans.forEach(plan => {
      plan.classList.remove('selected');
    });

    // Add 'selected' class to the clicked select-plan element
    this.classList.add('selected');
  }

  // Attach click event listener to each select-plan element
  selectPlans.forEach(plan => {
    plan.addEventListener('click', handlePlanClick);
  });



  
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
      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
      }
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
