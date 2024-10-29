// Light/Dark Mode Toggle
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark');

    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark');
    
    // Save the theme preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // **Change the --circle-color variable based on the mode**
    if (isDarkMode) {
        document.documentElement.style.setProperty('--circle-color', '#00bfff');  // Color for dark mode
    } else {
        document.documentElement.style.setProperty('--circle-color', '#ffb100');  // Color for light mode
    }
});

// Apply the theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.documentElement.style.setProperty('--circle-color', '#00bfff');  // Set color for dark mode
} else {
    document.documentElement.style.setProperty('--circle-color', '#ffb100');  // Set color for light mode
}

// Utility functions to handle local storage
function readLocalStorage() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

function storeLocalStorage(data) {
    localStorage.setItem('blogPosts', JSON.stringify(data));
}

// Redirect helper function
const redirectPage = function (url) {
    location.assign(url);
};
