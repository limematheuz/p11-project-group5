const input = document.querySelector("input");
const button = document.querySelector("button");
const results = document.querySelector(".results");

button.addEventListener("click", () => {
  const url = input.value;

  function getInformation(url) {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error " + response.status);
        }
      })
      .then((data) => {
        let formattedJson = JSON.stringify(data, null, 4);
        results.innerHTML = `<pre>${formattedJson}</pre>`
      })
      .catch((error) => {
        results.textContent = error.message;
      });
  }

  getInformation(url);
});