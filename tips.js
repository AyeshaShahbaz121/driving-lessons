const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach((t) => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Hide all content
        contents.forEach((content) => (content.style.display = 'none'));

        // Show content corresponding to the clicked tab
        document.getElementById(tab.dataset.tab).style.display = 'block';
    });
});
