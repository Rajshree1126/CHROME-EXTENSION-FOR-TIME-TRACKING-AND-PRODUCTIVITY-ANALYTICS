# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJSHREE MUNJABA BHALSHANKAR

*INTERN ID*: CT04DK771

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# Chrome Extension for Time Tracking and Productivity Analytics ⏱️

This project is a Chrome extension designed to help users manage their time more effectively by tracking the time spent on various websites and analyzing productivity patterns. It provides intuitive visualizations, user-friendly controls, and powerful data insights, making it an essential tool for professionals, students, and anyone seeking to understand and optimize their online habits.

## 🚀 Features

* **Automatic Website Tracking**: Monitors which websites are being accessed and logs time spent on each.
* **Real-Time Analytics**: Provides immediate feedback on usage patterns with charts and statistics.
* **Productivity Categorization**: Allows users to label websites as "productive" or "unproductive" and view the breakdown of their day.
* **Daily and Weekly Reports**: Summarizes activity across different periods to show long-term trends.
* **Customizable Settings**: Users can set goals, block distracting sites, or define focus hours.
* **Lightweight and Private**: Operates entirely in the browser without needing server access, ensuring user privacy.
* **Visual Feedback**: Uses graphs, pie charts, and progress bars for a quick overview of productivity.
* **Notification Reminders**: Sends alerts if a user exceeds time limits on distracting sites.

## 🌐 Technologies Used

* **HTML5**: Structures the user interface with semantic tags.
* **CSS3**: Styles the popup UI and dashboard elegantly.
* **JavaScript**: Handles core logic, background operations, and user interactions.
* **Chrome APIs**: Leverages the following key APIs:

  * `tabs` API: to detect active tabs
  * `storage` API: to store time logs and settings locally
  * `alarms` API: to set periodic tasks and alerts
  * `runtime` and `background` API: to enable persistent background tracking
* **Chart.js** (optional): For generating productivity charts and graphs.

## 📋 Project Structure

```
CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS/
|
├── manifest.json               # Configuration file for Chrome extension
├── background.js               # Background script handling tab and time tracking
├── popup.html                  # Popup UI when clicking the extension icon
├── popup.js                    # JS for handling popup interactions and display
├── style.css                   # Styling for the popup
├── dashboard.html              # Optional dashboard view for detailed reports
├── dashboard.js                # Logic to populate analytics in dashboard
├── icons/                      # Icon assets for the extension
└── README.md                   # Project documentation
```

## ⚙️ Installation & Setup

1. **Clone the Repository:**

```bash
git clone https://github.com/Rajshree1126/CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS.git
cd CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS
```

2. **Load the Extension Locally in Chrome:**

* Open Chrome and go to `chrome://extensions/`
* Enable **Developer mode** (top-right toggle)
* Click **Load unpacked** and select the project directory
* The extension icon will appear in the toolbar

3. **Start Tracking:**

* Click the icon to open the popup
* Review your daily productivity and change settings as needed

## 📆 Use Case Scenario

Imagine you're a student studying remotely. You install this extension to keep yourself accountable. During your study sessions, you mark educational sites like Khan Academy and Coursera as productive, and social media as unproductive. At the end of the week, you open the dashboard and notice that 40% of your time was lost on unproductive sites. You then use the blocking feature to limit social media to 15 minutes per day, improving your focus and study time significantly.

This tool is also ideal for remote workers, freelancers, or anyone interested in self-monitoring their web activity to boost productivity.

## 💡 Developer Notes

This Chrome extension is a great entry-level full-stack browser tool that demonstrates:

* Browser API interaction
* Frontend design principles for small UIs
* Real-time tracking logic
* Local storage management
* Time-based data processing

Future enhancements may include:

* Exporting reports to PDF
* Syncing across devices
* Integration with to-do list apps
* AI-generated productivity suggestions

---

This extension is a free and open-source tool for anyone looking to enhance their time management. Contributions and suggestions are welcome!

Give it a star ⭐ on [GitHub](https://github.com/Rajshree1126/CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS) if you find it useful!
