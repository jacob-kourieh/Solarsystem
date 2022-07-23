const url = 'https://fathomless-shelf-54969.herokuapp.com/bodies'
const key = 'solaris-7BTxHCyHhzIME5TI'

let planetsImages = document.querySelectorAll('.planets-imgs');
let searchInput = document.getElementById('search-input')


for (planet of planetsImages) {

    planet.addEventListener('click', async function (e) {
        let planSystem = await getSolarSystem();
        let allPlanets = planSystem.bodies


        for (let i = 0; i < allPlanets.length; i++) {
            let iPlanet = allPlanets[i];

            let idImgs = iPlanet.id;

            if (e.target.id == idImgs) {

                window.localStorage.setItem('clicked', JSON.stringify(iPlanet));
                window.location.href = "container.html";
            }
        }
    })
}


searchInput.addEventListener('keyup', async (e) => {

    if (e.key === "Enter") {

        let input = searchInput.value;
        let planets = await getSolarSystem(input)
        let allPlanets = planets.bodies

        for (let i = 0; i < allPlanets.length; i++) {

            let solarSystem = allPlanets[i];

            if (input === solarSystem.name.toLowerCase()) {
                
                window.localStorage.setItem('search', JSON.stringify(solarSystem));
                window.localStorage.setItem('planets', JSON.stringify(allPlanets));
                window.location.href = "searchPage.html";
                 return;
            }

        }

        if (input !== allPlanets.name) {
            console.log('ERROR INPUT');   
        }
    }
})




async function getSolarSystem() {
    //gör fetch
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-zocom': key
            }
        })
        let data = await response.json();

        console.log(data);

        return await data;
    } catch (err) {
        console.error(err);
    }
}



