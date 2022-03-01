const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idParameter = params.get('id');
const playerInformation = document.querySelector(".player-info");
console.log(idParameter);
(async function fetchApi() {

try{
    const response = await fetch(`https://free-nba.p.rapidapi.com/players/${idParameter}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "a6fad14e8fmshf1af7d917356575p176a39jsnb9c8aeaebde7"
        }
    })
    const responseJSon = await response.json();
    playerInformation.innerHTML = `<div class="info-card"><li><h3>First name: ${responseJSon.first_name}</h3></li>
    <li><h3>Last name: ${responseJSon.last_name}</h3></li>
    <li><h3>Position: ${responseJSon.position}</h3></li>
    <li><h3>Team: ${responseJSon.team.abbreviation}</h3></li> 
    <li><h3>City: ${responseJSon.team.city}</h3></li> 
    <li><h3>Conference: ${responseJSon.team.conference}</h3></li> 
    <li><h3>Division: ${responseJSon.team.division}</h3></li> 
    </div>`;
}
catch(e){
console.log(e)}

}())