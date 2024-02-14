html = {
    citySearchInput: document.querySelector("#citySearchInput"),
    citySearchBtn: document.querySelector("#citySearchBtn"),
}

html.citySearchBtn.addEventListener("click", getTheCity())

function getTheCity() {
    let value = citySearchInput.value
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&appid=d18d33fa9d081450174592c8f6fe5cf`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
        })
}

function statistic(body) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${body.lat}&lon=${body.lon}&appid=d18d33fa9d081450174592c8f6fe5cfd`)
        .then((res) => res.json())

}