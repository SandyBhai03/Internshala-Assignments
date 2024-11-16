

// Task 2
// const fetchDataBtn = document.querySelector("#fetchDataBtn");
// const output = document.querySelector("#output");

// fetchDataBtn.addEventListener('click', () => {
//     output.innerText = "Please wait fetching data..."
//     setTimeout(() => {
//         output.innerText = " Callback executed after 5 seconds";
//     }, 5000);
// })

// ----------------------------------------------------------------

// Task -3

// access the button and output div
const fetchDataBtn = document.querySelector("#fetchDataBtn");
const output = document.querySelector("#output");

const setPostTitles = (data) => {
    let postTiles = "<h2>Posts Titles:</h2><ul>"
  console.log(data.posts);
  data.posts.forEach((element, idx) => {
   postTiles += `<li>${element.title}</li>`;
  });

  postTiles += "</ul>"
  output.innerHTML = postTiles;
};

// fetch data from API
const fetchDataFromAPI = () => {
  fetch("https://dummyjson.com/posts")
    .then((response) => response.json())
    .then((data) => setPostTitles(data));
};

// callback function for delay
const delayCallback = () => {
  output.innerText = "Fetching Posts Titles from API...";
  setTimeout(() => {
    fetchDataFromAPI();
  }, 5000);
};

// add eventListener on button click
fetchDataBtn.addEventListener("click", delayCallback);
