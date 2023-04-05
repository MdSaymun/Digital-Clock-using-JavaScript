function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amPm = hours < 12 ? "AM" : "PM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zeros to single-digit minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Build the formatted time string
  const timeString = `${hours}:${minutes}:${seconds} ${amPm}`;

  // Display the formatted time in the clock div
  document.getElementById("clock").innerHTML = timeString;
}

// Call the updateTime function every second
setInterval(updateTime, 1000);
