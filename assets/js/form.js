document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const errorElement = document.getElementById('error');

    if (blogForm) {
        blogForm.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent default form submission behavior

            // Get values from the form fields and trim extra spaces
            const username = document.getElementById('username').value.trim();
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();

            // Validate the form (all fields must be filled)
            if (!username || !title || !content) {
                errorElement.textContent = 'Please complete the form.';
                return;
            }

            // Clear any previous error message
            errorElement.textContent = '';

            // **Create individual objects for each field**
            const usernameObj = { username: username };
            const titleObj = { title: title };
            const contentObj = { content: content };

            // Retrieve existing blog posts from localStorage or initialize an empty array
            let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

            // **Push the individual objects into the array**
            existingPosts.push(usernameObj, titleObj, contentObj);

            // Save the array of objects back to localStorage
            localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

            // Redirect to blog.html after successful form submission
            window.location.href = 'blog.html';  // Redirect to the blog page
        });
    }
});
