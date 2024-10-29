// Light/Dark Mode Toggle
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Apply the theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
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
