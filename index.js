/*

  1. I created a function named "updateClock" that will update the clock every second using the setInterval() method.
  2. Inside the "updateClock" function, I used the Date() object to get the current time.
  3. I formatted the time into hours, minutes, and seconds using string manipulation.
  4. I checked if the hours are greater than 12, then I subtracted 12 from the hours and added "PM" at the end, else I added "AM".
  5. I displayed the formatted time in the div element using innerHTML.
  6. Finally, I called the "updateClock" function once to initialize the clock.

*/

function updateClock() {
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

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
