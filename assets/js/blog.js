// Select DOM elements
const postsContainer = document.getElementById('postsContainer');
const backButton = document.getElementById('Back');

// Function to render blog posts from localStorage
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = '<p>No Blog posts yet...</p>';
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <blockquote>${post.content}</blockquote>
                <p><strong>By:</strong> ${post.username}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
}

// Call the function to render posts on page load
renderBlogList();

// Handle back button redirection
backButton.addEventListener('click', () => {
    redirectPage('index.html');
});
