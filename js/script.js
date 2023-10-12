const input = document.querySelector("input");
const button = document.querySelector("button");
const results = document.querySelector(".results");
const responseData = document.getElementById("responseData");
const httpOptions = document.querySelector(".label-button");

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
        responseData.textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        responseData.textContent = error.message;
      });
  }

  getInformation(url);
});