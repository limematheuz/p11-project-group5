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
        'Content-Type': 'application/json'
      }
    };

    if (method !== "GET" && method !== "DELETE") {
      requestConfig.body = JSON.stringify({ key: "value" });
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

       /* const responseData = document.createElement("p");
        p.innerHTML = `<p>${responseData}</p>`
        responseData.appendChild(p);*/

 // Crear un nuevo elemento de lista (<li>) y agregarlo a la lista
 //const li = document.createElement("li");
 //li.innerHTML = `<p>${camper}</p><button onclick="borrarNombre(${listaCampers.length - 1})"><img class="btn-cerrar" src="/static/img/borrar-03.svg" alt="cerrar"  /></button>`;
 //elementCampers.appendChild(li);