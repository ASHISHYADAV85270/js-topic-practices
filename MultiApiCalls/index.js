let loadingData = false;
let abortController = new AbortController();
async function callApi() {
  try {
    abortController.abort();
    abortController = new AbortController();
    let { signal } = abortController;
    displayLoading();
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal,
    });
    const json = await response.json();
    console.log(json);
    hideLoading();
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Api call aborted");
    } else {
      console.log(err);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const callApiBtn = document.getElementById("callApi");
  const abortApiCallBtn = document.getElementById("abortApiCall");
  callApiBtn.addEventListener("click", () => {
    callApi();
  });
  abortApiCallBtn.addEventListener("click", () => {
    hideLoading();
    // give a message to the user that the api call is aborted
    abortController.abort();
  });
});

function displayLoading() {
  loadingData = true;
  const loading = document.getElementById("loading");
  loading.style.display = "block";
}

function hideLoading() {
  loadingData = false;
  const loading = document.getElementById("loading");
  loading.style.display = "none";
}

const usersData = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
  },
  {
    id: 3,
    name: "Doe",
    email: "doe@gmail.com",
  },
  {
    id: 4,
    name: "Smith",
    email: "smith@gmail.com",
  },
];
