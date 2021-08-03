class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = Date.now();
    this.cardColor = null;
  }

  countDown(startTime) {
      startTimerBtn.disabled = true;
      var timer = startTime, minutes, seconds;
      setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDown.innerText = minutes + ':' + seconds;
        if (--timer < 0) {
          timer = 0;
          newActivity.markComplete();
        }
      }, 1000);
  };

  markComplete() {
    this.completed = true;
    startTimerBtn.innerText = 'COMPLETE!';
    logActivity.classList.remove('hidden');
    displayCongratsMessage();
  };

  saveToStorage() {
    var stringifiedActivities = JSON.stringify(storedActivities);
    localStorage.setItem('activityCollection', stringifiedActivities);
  };
};
