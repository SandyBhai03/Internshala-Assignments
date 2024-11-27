const output = document.getElementById("output")
const fetchBtn = document.getElementById("fetchData");

async function fetchDataWithAPI() {
    output.textContent = 'Loading...';

    // Create a promise that rejects after 5 seconds
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Operation timed out')), 5000)
    );

    try {
      // Fetch data from the API and race with timeout
      const response = await Promise.race([
        fetch('https://dummyjson.com/posts'),
        timeoutPromise,
      ]);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const posts = data.posts;

      // Update the UI with the posts
      const postList = posts.map(post => `<li>${post.title}</li>`).join('');
      output.innerHTML = `<ul>${postList}</ul>`;
    } catch (error) {
      // Handle errors and display them
      output.innerHTML = `<span class="error">${error.message || error}</span>`;
    }
  }

fetchBtn.addEventListener('click', fetchDataWithAPI)


