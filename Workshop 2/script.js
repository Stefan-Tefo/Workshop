const url = 'https://swapi.dev/api/';
let peopleUrl = `${url}people/?page=<PAGE_NUMBER>`;
let shipsUrl = `${url}starships/?page=<PAGE_NUMBER>`;

html = {
	peopleBtn: document.querySelector("#peopleBtn"),
	result: document.querySelector("#result"),
	shipsBtn: document.querySelector("#shipsBtn")
}

html.peopleBtn.addEventListener("click", () => showPeopleButton())
html.shipsBtn.addEventListener("click", () => showShipsButton())

function showShipsButton() {
	fetch("https://swapi.dev/api/starships/")
		.then((res) => res.json())
		.them((body) => showPeopleButton(body))
}

function showPeopleButton() {
	fetch("https://swapi.dev/api/people/")
		.then((res) => res.json())
		.then((body) => showArrayOfAllPeople(body))

}

function showArrayOfAllShips(body) {
	body.results.forEach((item) => {
		html.result.innerHTML += generateTableTwo(item)
	});
}

function showArrayOfAllPeople(body) {
	// debugger
	body.results.forEach((item) => {
		html.result.innerHTML += generateTableOne(item)
	});
}

function generateTableTwo(item) {
	return `
    <div class="row yellow padding">
				<div class="col">Name</div>
				<div class="col">Model</div>
				<div class="col">Manufacturer</div>
				<div class="col">Cost</div>
				<div class="col">People Capacity</div>
				<div class="col">Class</div>
			</div>
			<div class="row white padding">
				<div class="col">${item.name}</div>
				<div class="col">${item.model}</div>
				<div class="col">${item.manufacturer}</div>
				<div class="col">${item.cost_in_credits}</div>
				<div class="col">${item.passengers}</div>
				<div class="col">${item.starship_class}</div>
			</div>
    `
}


function generateTableOne(item) {
	return `
    <div class="row yellow padding">
				<div class="col">Name</div>
				<div class="col">Height</div>
				<div class="col">Mass</div>
				<div class="col">Gender</div>
				<div class="col">Birth Year</div>
				<div class="col">Appearances </div>
			</div>
			<div class="row white padding">
				<div class="col">${item.name}</div>
				<div class="col">${item.height}</div>
				<div class="col">${item.mass}</div>
				<div class="col">${item.gender}</div>
				<div class="col">${item.birth_year}</div>
				<div class="col">${item.films.lenght}</div>
			</div>
    `
}