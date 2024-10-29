document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const errorElement = document.getElementById('error');

    // **Declare the variables at the top without the "Obj" suffix**
    const username = { username: "" };
    const title = { title: "" };
    const content = { content: "" };

    if (blogForm) {
        blogForm.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent default form submission behavior

            // **Update the object values dynamically on form submission**
            username.username = document.getElementById('username').value.trim();
            title.title = document.getElementById('title').value.trim();
            content.content = document.getElementById('content').value.trim();

            // **Validate the form (all fields must be filled)**
            if (!username.username || !title.title || !content.content) {
                errorElement.textContent = 'Please complete the form.';
                return;
            }

            // Clear any previous error message
            errorElement.textContent = '';

            // **Debugging: Log the objects to make sure they are correct**
            console.log('username:', username);
            console.log('title:', title);
            console.log('content:', content);

            // **Retrieve existing blog posts from localStorage or initialize an empty array**
            let existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

            // **Ensure existingPosts is always an array**
            if (!Array.isArray(existingPosts)) {
                existingPosts = [];  // Reset to an empty array if not an array
            }

            // **Push the individual objects into the array**
            existingPosts.push(username, title, content);

            // Save the array of objects back to localStorage
            localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

            // **Redirect to blog.html after successful form submission**
            window.location.href = 'blog.html';  // Redirect to the blog page
        });
    }
});
