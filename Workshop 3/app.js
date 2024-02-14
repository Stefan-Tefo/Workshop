html = {
    citySearchInput: document.getElementById("citySearchInput"),
    citySearchBtn: document.querySelector("#citySearchBtn"),
}

html.citySearchBtn.addEventListener("click", function (e) {
    e.preventDefault()
    getTheCity();

})


function getTheCity() {
    let value = html.citySearchInput.value
    console.log("the value is " + value);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=74e59f6374abe0d9b758877616ae444c`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
            statistic(body)
            console.log(statistic(body));
        })
}

function statistic(body) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${body[0].lat}&lon=${body[0].lon}&appid=74e59f6374abe0d9b758877616ae444c`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
        })
}

function showWeatherAlert() {
    return
}