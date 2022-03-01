const playerInfo = document.querySelector(".player-data");
(async function fetchApi() {
  const response = await fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "a6fad14e8fmshf1af7d917356575p176a39jsnb9c8aeaebde7"
	}
})
const responseJSon = await response.json()
const playerData = responseJSon.data;
for (let i = 0; i < playerData.length; i++) {
    playerInfo.innerHTML += `<div class="card"><li><h3>First name: ${playerData[i].first_name}</h3></li>
    <li><h3>Last name: ${playerData[i].last_name}</h3></li>
    <li><h3>Position: ${playerData[i].position}</h3></li>
    <li><h3>Team: ${playerData[i].team.abbreviation}</h3></li>
    <span class="link-button"><a href="details.html?id=${playerData[i].id}">More Information about</a></span>  
    </div>`
}
}())