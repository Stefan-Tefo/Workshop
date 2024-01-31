const url = 'https://swapi.dev/api/';
let peopleUrl = `${url}people/?page=<PAGE_NUMBER>`;
let shipsUrl = `${url}starships/?page=<PAGE_NUMBER>`;

html = {
	peopleBtn: document.querySelector("#peopleBtn"),
	result: document.querySelector("#result"),
	shipsBtn: document.querySelector("#shipsBtn"),
	loader: document.querySelector("#loader"),
	nextBtn: document.querySelector("#nextBtn"),
	prevBtn: document.querySelector("#prevBtn")
}

html.peopleBtn.addEventListener("click", () => showPeopleButton())
html.shipsBtn.addEventListener("click", () => showShipsButton())
html.nextBtn.addEventListener("click", () => goNext())

function goNext() {
	fetch("https://swapi.dev/api/people/?page=2")
		.then(res => res.json())
		.then((body) => {
			showPeopleButton(body)
		})
}

function showShipsButton() {
	toggleLoader(true)
	html.result.innerHTML = "";
	fetch("https://swapi.dev/api/starships/")
		.then((res) => res.json())
		.then((body) => {
			showArrayOfAllShips(body)
			nextBtn.style.display = "block"
		})
		.catch(error => console.error(error))
		.finally(() => toggleLoader(false));
}

function showPeopleButton() {
	toggleLoader(true)
	html.result.innerHTML = "";
	fetch("https://swapi.dev/api/people/")
		.then((res) => res.json())
		.then((body) => {
			showArrayOfAllPeople(body)
			nextBtn.style.display = "block"
		})
		.catch(error => console.error(error))
		.finally(() => toggleLoader(false));

}
function showArrayOfAllPeople(body) {
	// debugger
	body.results.forEach((item) => {
		html.result.innerHTML += generateTableOne(item)
	});
}

function showArrayOfAllShips(body) {
	body.results.forEach((item1) => {
		html.result.innerHTML += generateTableTwo(item1)
	});
}


function generateTableTwo(item1) {
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
				<div class="col">${item1.name}</div>
				<div class="col">${item1.model}</div>
				<div class="col">${item1.manufacturer}</div>
				<div class="col">${item1.cost_in_credits}</div>
				<div class="col">${item1.passengers}</div>
				<div class="col">${item1.starship_class}</div>
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
				<div class="col">${item.films.length}</div>
			</div>
    `
}

function toggleLoader(loader) {
	if (loader) {
		html.loader.style.display = 'block';
	} else {
		html.loader.style.display = 'none';
	}
}