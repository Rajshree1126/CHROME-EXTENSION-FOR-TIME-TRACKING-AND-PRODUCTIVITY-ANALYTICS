// Hardcoded user ID (can be dynamic in a real-world scenario)
const userId = "user1";

// Select DOM elements
const summaryDiv = document.getElementById("summary");            // Summary display area
const dashboardBtn = document.getElementById("open-dashboard");  // Button to open full dashboard

// Add click listener to the dashboard button to open dashboard page in a new tab
dashboardBtn.addEventListener("click", () => {
  chrome.tabs.create({ url: "http://localhost:5000/dashboard/index.html" }); // Open dashboard in new tab
});

// Fetch and display the productivity summary
async function fetchSummary() {
  try {
    // Request analytics data from the backend
    const res = await fetch(`http://localhost:5000/api/analytics/${userId}`);
    const data = await res.json();

    // Initialize counters
    let productiveTime = 0;
    let unproductiveTime = 0;

    // Loop through the returned summary and update counters
    data.forEach((item) => {
      if (item._id) {
        if (item._id === true) productiveTime = item.totalTime;
        else unproductiveTime = item.totalTime;
      }
    });

    // Display the data in the popup summary section, converting seconds to minutes
    summaryDiv.innerHTML = `
      <p>Productive Time: <strong>${(productiveTime / 60).toFixed(2)} minutes</strong></p>
      <p>Unproductive Time: <strong>${(unproductiveTime / 60).toFixed(2)} minutes</strong></p>
    `;
  } catch (err) {
    // Show fallback message if fetch fails
    summaryDiv.textContent = "Failed to load data.";
  }
}

// Call the fetch function when the popup loads
fetchSummary();
