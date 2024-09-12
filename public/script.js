document.addEventListener('DOMContentLoaded', () => {
  // Example: Adding an event listener to a form for post creation
  const postForm = document.querySelector('#postForm');
  
  if (postForm) {
    postForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      const content = document.querySelector('#postContent').value;

      if (content.trim() === '') {
        alert('Post content cannot be empty');
        return;
      }

      try {
        const response = await fetch('/posts/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content })
        });

        if (response.ok) {
          // Optionally, refresh the profile page or display the new post
          window.location.reload();
        } else {
          alert('Failed to create post');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      }
    });
  }

  // Example: Loading posts dynamically (if you have a dedicated page for this)
  const postsContainer = document.querySelector('#postsContainer');

  if (postsContainer) {
    const loadPosts = async () => {
      try {
        const response = await fetch('/posts');
        const posts = await response.json();

        postsContainer.innerHTML = posts.map(post => `
          <div class="post">
            <p><strong>${post.user.username}:</strong> ${post.content}</p>
            <p><small>${new Date(post.createdAt).toLocaleString()}</small></p>
          </div>
        `).join('');
      } catch (error) {
        console.error('Error:', error);
        postsContainer.innerHTML = '<p>An error occurred while loading posts.</p>';
      }
    };

    loadPosts();
  }
});
