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
var submitBtn = document.querySelector('.start-btn');
var startTimerBtn = document.querySelector('.start-button');
var warningMsgAcc = document.querySelector('#warningMsgAccomp');
var warningMsgMin = document.querySelector('#warningMsgMin');
var warningMsgSec = document.querySelector('#warningMsgSec');
var inputFields = document.querySelectorAll('.input-field');
var category;
var activityIsClicked = false;
var invalidCharacters = [
  '-',
  '+',
  'e',
  'E',
];
var activityToAdd = [];
activityBtns.addEventListener('click', function(e) {
  e.preventDefault();
  displayActiveActivity(e);
});
inputTimeFields.addEventListener('keydown', function(e) {
  if (invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
});
submitBtn.addEventListener('click', checkForm);
function checkForm() {
  event.preventDefault();
  // var warningMsg = `<img class="warning-image" src="./assets/warning.svg"> A description is required.`;
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
  var newActivity = new Activity(category, accomplishment.value, minutes.value, seconds.value);
  activityToAdd.push(newActivity);
}
function changeToTimerView() {
  var activityTimer= document.querySelector('.activity-timer');
  var timerCategory= document.querySelector('.category-for-timer');
  var counterClock = document.querySelector('.countdown');
  if(minutes.value && seconds.value && accomplishment.value && activityIsClicked) {
  activityControlCntr.classList.add('hidden');
  selectCategory.classList.add('hidden');
  activityTimer.classList.remove('hidden')
  activityHeader.innerText = 'Current Activity';
  timerCategory.innerText = accomplishment.value;
  counterClock.innerText = `${minutes.value}:${seconds.value}`;
  }
  changeTimerColor();
};
function changeTimerColor() {
  if(category === 'Study') {
    startTimerBtn.classList.add('study-timer');
  } else if(category === 'Meditate') {
    startTimerBtn.classList.add('meditate-timer');
  } else {
    startTimerBtn.classList.add('exercise-timer');
  }
}
function displayActiveActivity(e) {
  e.preventDefault();
  activityIsClicked = true;
  var btnID = event.target.id;
  category = event.target.innerText;
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