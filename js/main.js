let timesValues = document.querySelectorAll(".times li");
let allTimeTitles = document.querySelectorAll(".time-title");
let currentHours = document.querySelectorAll("span.current");
let prevHours = document.querySelectorAll("span.previous");
let timeFrame = "weekly";
updateData(timeFrame);

timesValues.forEach(time => {
	time.addEventListener("click", (e) => {
		timesValues.forEach(time => {
			time.classList.remove("on");
		})
		e.currentTarget.classList.add("on");
		timeFrame = e.target.innerText.toLowerCase();
		updateData(timeFrame);
	})
});
function updateData(timeFrame) {
	fetch("../data.json").then(result => {
		let datajson = result.json();
		return datajson;
	}).then(datajson => {
		for(let i = 0; i < datajson.length; i++) {
			allTimeTitles[i].innerText = timeFrame;
			currentHours[i].innerText = datajson[i].timeframes[timeFrame].current;
			prevHours[i].innerText = datajson[i].timeframes[timeFrame].previous;
		}
	})
}

