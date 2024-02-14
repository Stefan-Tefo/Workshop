html = {
    citySearchInput: document.getElementById("citySearchInput"),
    citySearchBtn: document.querySelector("#citySearchBtn"),
    statisticsResult: document.querySelector("#statisticsResult"),
}

html.citySearchBtn.addEventListener("click", function (e) {
    e.preventDefault()
    getTheCity();

})


// function getTheCity() {
//     let value = html.citySearchInput.value
//     console.log("the value is " + value);
//     fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=74e59f6374abe0d9b758877616ae444c`)
//         .then((res) => res.json())
//         .then((body) => {
//             console.log(body);
//             statistic(body)
//             console.log(statistic(body));
//         })
// }

// function statistic(body) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${body[0].lat}&lon=${body[0].lon}&appid=74e59f6374abe0d9b758877616ae444c`)
//         .then((res) => res.json())
//         .then((body) => {
//             console.log(body);
//         })
// }

function getTheCity() {
    let value = html.citySearchInput.value
    fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&APPID=74e59f6374abe0d9b758877616ae444c`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
            showWeatherAlert(body)
            const listMax = getMaxTemp(body.list[0].main?.max_temp)
            getMaxTemp(body, listMax)
        })
}

function showWeatherAlert(listMax) {
    return statisticsResult.innerHTML = `
    <div>
        <h1>Temperature</h1>
        <div>Highest:${listMax}</div>
        <div>Avrage:</div>
        <div>Lowest:</div>
    </div>
    <div>
        <h1>Humidity</h1>
        <div>Highest:</div>
        <div>Avrage:</div>
        <div>Lowest:</div>
    </div>
    <div>
        <div>Warmest time of the days ahead:</div>
        <div>Coldest time of the days ahead:</div>
    </div>
    `
}

function getMaxTemp(listMax) {
    if (listMax) {
        return main[0].map(el => el.max_temp).join("")
    } else {
        return "No max temp"
    }
}