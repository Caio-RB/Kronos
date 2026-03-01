const clock = document.querySelector("#clock");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const stop = document.querySelector(".stop");
let data = new Date();
data.setHours(00,00,00);
let timer;
function showtime(){	
	let time = data.toLocaleTimeString("pt-BR", {hour12: false, hour: "2-digit", minute:"2-digit", second:"2-digit"});
	return time;
}

function startTimer(){
	if(timer) return;
	timer = setInterval(()=>{
		clock.innerText = showtime();
		data.setSeconds(data.getSeconds() + 1);
	},1000);
}

function resetTimer(){
	data.setHours(00,00,00);
	clock.innerText = showtime();
}

function stopTimer(){
	clearInterval(timer);
	timer = null;
}
start.addEventListener("click", startTimer);
restart.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);
