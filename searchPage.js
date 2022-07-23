let searchData = JSON.parse(window.localStorage.getItem("search"));
let planetsData = JSON.parse(window.localStorage.getItem("planets"));

let searchInput = document.getElementById("search-input");
let container = document.getElementById("container");

let input = searchData.name;

document.querySelector(".resultetText").innerText = `Din sökning [ ${searchData.name} ] gav den resultat:`;
document.querySelector(".image").setAttribute('src', `./imgs/${input}.jpg`);
document.querySelector(".heading").innerText = searchData.name;
document.querySelector(".type").innerText = searchData.type;


document.querySelector(".button").addEventListener('click', function () {
  window.localStorage.setItem('clicked', JSON.stringify(searchData));
  window.location.href = "container.html";
})


searchInput.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    document.getElementById("container").innerHTML = "";

    let input = searchInput.value;

    for (let i = 0; i < planetsData.length; i++) {
      let solarSystem = planetsData[i];


      if (input === solarSystem.name.toLowerCase()) {

        let resultetText = document.createElement('p')
        resultetText.innerText = `Din sökning [ ${solarSystem.name} ] gav den resultat:`
        resultetText.className = 'resultetText'
        container.appendChild(resultetText);
        


        let img = document.createElement('img');
        img.setAttribute('src', `./imgs/${input}.jpg`);
        img.className = 'image'
        container.appendChild(img);

      
        let planetName = document.createElement('h1')
        planetName.innerText = solarSystem.name
        planetName.className = 'heading'
        container.appendChild(planetName);

        let planetType = document.createElement('p')
        planetType.innerText = solarSystem.type
        planetType.className = 'type'
        container.appendChild(planetType);
        

        let button = document.createElement('button')
        button.innerText = 'Mer Info'
        button.className = 'button'
        container.appendChild(button);

        button.addEventListener('click', function () {
          let planetI = planetsData;
          window.localStorage.setItem('clicked', JSON.stringify(planetI[i]));
          window.location.href = "container.html";
        })
        return;
      }

    }

    if (input !== planetsData.name) {
      console.log('ERROR');
      let error = document.createElement('p')
      error.innerText =  `Din sökning [${input}] hittade inte. Försok igen..`
      error.className = 'resultetText'
      container.appendChild(error);

      let errorImg = document.createElement('img')
      errorImg.setAttribute ('src', './imgs/undraw_page_not_found_re_e9o6.svg')
      errorImg.className = 'image'
        container.appendChild(errorImg);

        let notFoundTxt = document.createElement('h3')
        notFoundTxt.innerText = "NOT FOUND"
        notFoundTxt.className = 'not-found'
        container.appendChild(notFoundTxt);
    }
  }

});






