const input = document.querySelector("input");
const button = document.querySelector("button");
const results = document.querySelector(".results");
const responseData = document.getElementById("responseData");
const httpOptions = document.querySelector("#httpOptions"); 

button.addEventListener("click", () => {
  const url = input.value;
  const method = httpOptions.value; 

  function getInformation(url, method) { 
  const requestConfig = { 
    method: method, 
    headers: { 
      'Content-Type':'application/json'
    } 
  };

  if (method !== "GET" && method !== "DELETE") { 
    requestConfig.body = JSON.stringify({key: "value"}); 
  } 
    fetch(url, requestConfig)
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
  getInformation(url, method);
});