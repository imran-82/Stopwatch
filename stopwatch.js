let hr = 0;
let min = 0;
let sec = 0;
let csec = 0;

let timer = false;

function start() {
	timer = true;
	stopwatch();
}
function stop() {
	timer = false;
}
function reset() {
	timer = false;
	hr = 0;
	min = 0;
	sec = 0;
	csec = 0;
	document.getElementById("hour").innerHTML = "00";
	document.getElementById("minute").innerHTML = "00";
	document.getElementById("second").innerHTML = "00";
	document.getElementById("centisec").innerHTML = "00";
}
function stopwatch() {
	if (timer) {
		csec = csec + 1;
		if (csec == 100) {
			sec = sec + 1;
			csec = 0;
		}
		if (sec == 60) {
			min = min + 1;
			sec = 0;
		}
		if (min == 60) {
			hr = hr + 1;
			min = 0;
			sec = 0;
		}

		let hrString = hr;
		let minString = min;
		let secString = sec;
		let csecString = csec;
		if (hr < 10) {
			hrString = "0" + hr;
		}
		if (min < 10) {
			minString = "0" + min;
		}
		if (sec < 10) {
			secString = "0" + sec;
		}
		if (csec < 10) {
			csecString = "0" + csec;
		}

		document.getElementById("hour").innerHTML = hrString;
		document.getElementById("minute").innerHTML = minString;
		document.getElementById("second").innerHTML = secString;
		document.getElementById("centisec").innerHTML = csecString;
		setTimeout("stopwatch()", 10);
	}
}
