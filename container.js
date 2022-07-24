let clickedData = JSON.parse(window.localStorage.getItem("clicked"));

console.log(clickedData);

let nam = clickedData.name;

document.querySelector(".image").setAttribute('src', `/imgs/${nam}.jpg`);
document.querySelector(".planet-name").innerText = clickedData.name;
document.querySelector(".type").innerText = clickedData.type;
document.querySelector(".planet-desc").innerText = clickedData.desc;
document.querySelector(".circumference").innerText = `Omkrets: ${clickedData.circumference} km`;
document.querySelector(".distance").innerText = `Avstånd: ${clickedData.distance}`;
document.querySelector(".latinName").innerText = `Latin Namn: ${clickedData.latinName}`;
document.querySelector(".moons").innerText = `Månar: ${clickedData.moons}`;
document.querySelector(".rotation").innerText = `Rotation: ${clickedData.rotation}`;
document.querySelector(".temp").innerText = `Temperaturer: Dag ${clickedData.temp.day} /  Natt  ${clickedData.temp.night} `;