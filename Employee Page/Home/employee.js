// Ensure that the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the context of the canvas where the chart will be rendered
  const ctx = document.getElementById("workload-chart").getContext("2d");

  // Create a new Chart.js instance with data and settings
  const chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Task 1", "Task 2", "Task 3", "Task 4"],
      datasets: [
        {
          label: "Workload Distribution",
          data: [30, 40, 10, 20], // Data points representing work distribution
          backgroundColor: ["#FF5733", "#33B5FF", "#FFCC00", "#A0E7E5"], // Colors for each section of the pie chart
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.label + ": " + tooltipItem.raw + "%"; // Show percentage in tooltips
            },
          },
        },
      },
    },
  });

  // Edit Profile

  const editBtn = document.getElementById("edit-btn");
  const editForm = document.getElementById("edit-form");
  const profileInfo = document.querySelector(".profile-info");
  const cancelBtn = document.getElementById("cancel-btn");
  const profileName = document.getElementById("profile-name");
  const profileEmail = document.getElementById("profile-email");
  const profilePhone = document.getElementById("profile-phone");
  const fileInput = document.getElementById("profile-input");
  const profilePic = document.querySelector(".profile-photo");

  // Edit button click event
  editBtn.addEventListener("click", function () {
    // Show the editable form and hide the profile info
    editForm.style.display = "block";
    profileInfo.style.display = "none";

    // Populate the form with the current profile data
    document.getElementById("edit-name").value = profileName.textContent;
    document.getElementById("edit-email").value =
      profileEmail.textContent.replace("Email: ", "");
    document.getElementById("edit-phone").value =
      profilePhone.textContent.replace("Phone: ", "");
  });

  // Cancel button click event
  cancelBtn.addEventListener("click", function () {
    // Hide the editable form and show the profile info again
    editForm.style.display = "none";
    profileInfo.style.display = "block";
  });

  // Profile form submission event
  const profileForm = document.getElementById("profile-form");
  profileForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get the new values from the form
    const newName = document.getElementById("edit-name").value;
    const newEmail = document.getElementById("edit-email").value;
    const newPhone = document.getElementById("edit-phone").value;

    // Handle the profile picture change
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Update the profile picture
        profilePic.src = e.target.result;
      };

      reader.readAsDataURL(fileInput.files[0]);
    }

    // Update the profile info with the new values
    profileName.textContent = newName;
    profileEmail.textContent = "Email: " + newEmail;
    profilePhone.textContent = "Phone: " + newPhone;

    // Hide the form and show the updated profile
    editForm.style.display = "none";
    profileInfo.style.display = "block";
  });
});
