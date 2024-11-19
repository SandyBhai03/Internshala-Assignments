const button = document.getElementById('fetchData');
const output = document.getElementById('output');

    button.addEventListener('click', () => {
      output.textContent = 'Loading...';

      const fetchData = new Promise((resolve, reject) => {
        // Timeout for error handling
        const timeout = setTimeout(() => {
          reject('Operation timed out');
        }, 5000);

        // Fetch data from the API
        fetch('https://dummyjson.com/posts')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then(data => {
            clearTimeout(timeout);
            resolve(data.posts);
          })
          .catch(error => {
            clearTimeout(timeout);
            reject(error.message);
          });
      });

      fetchData
        .then(posts => {
          const postList = posts.map(post => `<li>${post.title}</li>`).join("");
          output.innerHTML = `<ul>${postList}</ul>`;
        })
        .catch(error => {
          output.innerHTML = `<span class="error">${error}</span>`;
        });
    });