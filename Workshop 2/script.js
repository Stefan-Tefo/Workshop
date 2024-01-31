const url = 'https://swapi.dev/api/';
let peopleUrl = `${url}people/?page=<PAGE_NUMBER>`;
let shipsUrl = `${url}starships/?page=<PAGE_NUMBER>`;

html = {
    peopleBtn: document.querySelector("#peopleBtn"),
    result: document.querySelector("#result")
}

html.peopleBtn.addEventListener("click", () => showPeopleButton())

function showPeopleButton() {
    fetch("https://swapi.dev/api/people/")
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
            showArrayOfPeople(body)
        })

}

function showArrayOfPeople(body) {
    body.forEach((body) => {
        html.result.innerHTML += generateTable(body)
    });
}

function generateTable(body) {
    return `
    <div class="row yellow padding">
				<div class="col">Name</div>
				<div class="col">Height</div>
				<div class="col">Mass</div>
				<div class="col">Gender</div>
				<div class="col">Birth Year</div>
				<div class="col">Films</div>
			</div>
			<div class="row white padding">
				<div class="col">${body.results[0].name}</div>
				<div class="col">${body.results[0].height}</div>
				<div class="col">${body.results[0].mass}</div>
				<div class="col">${body.results[0].gender}</div>
				<div class="col">${body.results[0].birth_year}</div>
				<div class="col">${body.results[0].films}</div>
			</div>
    `
}