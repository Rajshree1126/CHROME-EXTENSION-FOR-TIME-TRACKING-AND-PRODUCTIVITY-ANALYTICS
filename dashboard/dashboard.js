// Hardcoded user ID (can later be made dynamic)
const userId = "user1";

// Function to fetch analytics data from the server
async function fetchAnalytics() {
  try {
    const res = await fetch(`http://localhost:5000/api/analytics/${userId}`);
    return await res.json(); // Parse and return JSON response
  } catch {
    return null; // Return null if fetch fails
  }
}

// Function to render the productivity chart using Chart.js
async function renderChart() {
  const data = await fetchAnalytics(); // Get analytics data

  // Show error alert if data couldn't be fetched
  if (!data) {
    alert("Failed to load analytics");
    return;
  }

  // Initialize counters
  let productiveTime = 0;
  let unproductiveTime = 0;

  // Iterate through the aggregated data
  data.forEach((item) => {
    if (item._id) {
      // If _id is true, it's productive time
      if (item._id === true) productiveTime = item.totalTime;
      else unproductiveTime = item.totalTime;
    }
  });

  // Get the canvas context where the chart will be rendered
  const ctx = document.getElementById("productivityChart").getContext("2d");

  // Create a doughnut chart using Chart.js
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Productive", "Unproductive"],
      datasets: [
        {
          label: "Time spent (seconds)",
          data: [productiveTime, unproductiveTime],
          backgroundColor: ["#27ae60", "#c0392b"], // Green for productive, red for unproductive
          hoverOffset: 4, // Slight offset on hover
        },
      ],
    },
  });
}

// Call the chart render function when script loads
renderChart();
