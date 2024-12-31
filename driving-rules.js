 // Tab Functionality
const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

// Add event listeners to each tab
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs and panes
        tabs.forEach((t) => t.classList.remove("active"));
        tabPanes.forEach((pane) => pane.classList.remove("active"));

        // Add active class to the clicked tab and corresponding pane
        tab.classList.add("active");
        const targetTab = tab.getAttribute("data-tab");
        document.getElementById(targetTab).classList.add("active");
    });
});

// Optional: Add a console log for debugging or user feedback
console.log("Tabs are initialized and ready to use!");
