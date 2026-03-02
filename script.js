const clock = document.querySelector("#clock");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const stop = document.querySelector(".stop");
const lap = document.querySelector(".lap");
const laps = document.querySelector(".laps");
const lapsList = document.querySelector(".laps-list");
stop.style.display="none";
let data = new Date();
data.setHours(00,00,00);
let timer;
function showtime(){	
	let time = data.toLocaleTimeString("pt-BR", {hour12: false, hour: "2-digit", minute:"2-digit", second:"2-digit"});
	return time;
}

function startTimer(){
	if(timer) return;
	start.style.display = "none";
	stop.style.display = "";
	timer = setInterval(()=>{
		data.setSeconds(data.getSeconds() + 1);
		clock.innerText = showtime();
	},1000);
}

function resetTimer(){
	data.setHours(00,00,00);
	clock.innerText = showtime();
	if(start.display != "none"){
		start.innerText = "Start";
	}
}

function stopTimer(){
	start.style.display = "";
	start.innerText = "Resume"
	stop.style.display = "none";
	clearInterval(timer);
	timer = null;
}

function lapTimer(){
	let newLap = document.createElement("li");
	newLap.innerText = showtime();
	newLap.classList.add("lap-register");
	lapsList.prepend(newLap);
}

start.addEventListener("click", startTimer);
restart.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);
lap.addEventListener("click", lapTimer);
