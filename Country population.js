let inputEl = document.getElementById("searchInput");
let maincontainerEl = document.getElementById("resultCountries");
let mainData = null;


function displayResults(eachitem) {
    let containerEl = document.createElement("div");
    containerEl.classList.add("country-card", "col-11", "col-md-5");
    maincontainerEl.appendChild(containerEl);

    let imageEl = document.createElement("img");
    imageEl.src = eachitem.flag;
    imageEl.classList.add("country-flag");
    containerEl.appendChild(imageEl);

    let div1 = document.createElement("div");
    div1.classList.add("box1");
    containerEl.appendChild(div1);

    let para1El = document.createElement("p");
    para1El.textContent = eachitem.name;
    para1El.classList.add("country-name");
    div1.appendChild(para1El);

    let para2El = document.createElement("p");
    para2El.textContent = eachitem.population;
    para2El.classList.add("country-population");
    div1.appendChild(para2El);
}


function getData() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            mainData = jsonData;
            console.log(mainData);
            let inputValue = inputEl.value;
            let newData = mainData.filter(function(item) {
                return item.name.toLowerCase().includes(inputValue.toLowerCase());
            });
            for (let eachItem of newData) {
                displayResults(eachItem);
            }
        });
}


function getCountries(event) {
    maincontainerEl.textContent = "";
    getData();
}


inputEl.addEventListener("keydown", getCountries);

getData();