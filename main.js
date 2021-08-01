var activityBtns = document.querySelector('.actv-button-row');
var activityControlCntr = document.querySelector('.actv-control-center');
var activityHeader = document.querySelector('.new-act-header');
var selectCategory = document.querySelector('.select-category');
var studyBtn = document.querySelector('#study-button');
var meditateBtn = document.querySelector('#meditate-button');
var exerciseBtn = document.querySelector('#exercise-button');
var inputTimeFields = document.querySelector('.time');
var inputAccompField = document.querySelector('.prompt')
var accomplishment = document.querySelector('#accomplishment');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var submitBtn = document.querySelector('#startActivity');
var startTimerBtn = document.querySelector('.start-button');
var warningMsgAcc = document.querySelector('#warningMsgAccomp');
var warningMsgMin = document.querySelector('#warningMsgMin');
var warningMsgSec = document.querySelector('#warningMsgSec');
var inputFields = document.querySelectorAll('.input-field');
var countDown = document.querySelector('.countdown');
var logActivity = document.querySelector('#logActivity');
var activityTimer= document.querySelector('.activity-timer');
var category;
var activityIsClicked = false;
var startTime;
var invalidCharacters = [
  '-',
  '+',
  'e',
  'E',
];
var activityToAdd = [];

var newActivity;

activityBtns.addEventListener('click', function(e) {
  e.preventDefault();
  displayActiveActivity(e);
  changeTimerColor();
});

inputTimeFields.addEventListener('keydown', function(e) {
  if (invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
});
submitBtn.addEventListener('click', function() {
  checkForm();
  createCountDown();
});


startTimerBtn.addEventListener('click', function() {
  newActivity.countDown(startTime)});

function doShit() {
  if (startTimerBtn.innerText === 'COMPLETE!') {
    window.alert('Activity has been completed!');
  }
};

function createCountDown() {
  startTime = parseInt(minutes.value) * 60 + parseInt(seconds.value);
    if(parseInt(minutes.value) < 10) {
    minutes.value = '0' + minutes.value;
  } if(parseInt(seconds.value) < 10) {
    seconds.value = '0' + seconds.value;
  }
  countDown.innerText = `${minutes.value}:${seconds.value}`;
};

function checkForm() {
  event.preventDefault();
  for(var i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value && inputFields[i].id === "accomplishment") {
      warningMsgAcc.innerHTML = '<img class="warning-image" src="./assets/warning.svg"> A description is required.';
    } else if (!inputFields[i].value && inputFields[i].id === "minutes") {
      warningMsgMin.innerHTML = '<img class="warning-image" src="./assets/warning.svg"> Minutes are required.';
    } else if (!inputFields[i].value && inputFields[i].id === "seconds") {
      warningMsgSec.innerHTML = '<img class="warning-image" src="./assets/warning.svg"> Seconds are required.';
    }
  }
  instantiateNewActivity();
  changeToTimerView();
};
function instantiateNewActivity() {
  newActivity = new Activity(category, accomplishment.value, parseInt(minutes.value), parseInt(seconds.value));
  activityToAdd.push(newActivity);
}
function changeToTimerView() {
  var timerCategory= document.querySelector('.category-for-timer');
  if(minutes.value && seconds.value && accomplishment.value && activityIsClicked) {
  activityControlCntr.classList.add('hidden');
  selectCategory.classList.add('hidden');
  activityTimer.classList.remove('hidden')
  activityHeader.innerText = 'Current Activity';
  timerCategory.innerText = accomplishment.value;
  }
};


function changeTimerColor() {
  if(category === 'Study') {
    startTimerBtn.classList.add('study-timer');
    startTimerBtn.classList.remove('meditate-timer');
    startTimerBtn.classList.remove('exercise-timer');
  } else if(category === 'Meditate') {
    startTimerBtn.classList.add('meditate-timer');
    startTimerBtn.classList.remove('exercise-timer');
    startTimerBtn.classList.remove('study-timer');
  } else if(category === 'Exercise') {
    startTimerBtn.classList.add('exercise-timer');
    startTimerBtn.classList.remove('study-timer');
    startTimerBtn.classList.add('meditate-timer');
  }
}


function displayActiveActivity(e) {
  e.preventDefault();
  activityIsClicked = true;
  var btnID = event.target.id;
  category = event.target.innerText
  if (btnID === "study-button") {
    event.target.className += ' active-study';
    meditateBtn.classList.remove('active-meditate');
    exerciseBtn.classList.remove('active-exercise');
  } else if (btnID === "meditate-button") {
    event.target.className += ' active-meditate';
    studyBtn.classList.remove('active-study');
    exerciseBtn.classList.remove('active-exercise');
  } else if (btnID === "exercise-button") {
    event.target.className += ' active-exercise';
    meditateBtn.classList.remove('active-meditate');
    studyBtn.classList.remove('active-study');
  }
};
