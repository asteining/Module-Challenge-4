document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const errorElement = document.getElementById('error');

    if (blogForm) {
        blogForm.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent default form submission behavior

            // Get the form input values and trim them
            const username = document.getElementById('username').value.trim();
            const title = document.getElementById('title').value.trim();
            const content = document.getElementById('content').value.trim();

            // **Debugging: Log the values to check if they are captured correctly**
            console.log('Username:', username);
            console.log('Title:', title);
            console.log('Content:', content);

            // **Validate the form (check if any fields are empty)**
            if (!username || !title || !content) {
                errorElement.textContent = 'Please complete the form.';
                console.log('Validation failed: Some fields are empty');
                return;  // Exit if validation fails
            }

            // Clear any previous error message
            errorElement.textContent = '';

            // Create an object to store the blog post data
            const blogPost = { username: username, title: title, content: content };

            // Retrieve existing blog posts from localStorage or initialize an empty array
            let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

            // Add the new blog post to the array
            existingPosts.push(blogPost);

            // Save the updated array back to localStorage
            localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

            // **Redirect to blog.html after successful form submission**
            window.location.href = 'blog.html';  // Redirect to the blog page
        });
    }
});
