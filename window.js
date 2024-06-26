window.addEventListener('DOMContentLoaded', function() {
  var timerElement = document.getElementById('timer');
  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  setInterval(updateTimer, 1000);

  function updateTimer() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    timerElement.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
});