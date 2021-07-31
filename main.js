var activityBtns = document.querySelector('.actv-button-row');
var studyBtn = document.querySelector('#study-button');
var meditateBtn = document.querySelector('#meditate-button');
var exerciseBtn = document.querySelector('#exercise-button');
var inputTimeFields = document.querySelector('.time');
var accomplishment = document.querySelector('#accomplishment');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var submitBtn = document.querySelector('.start-btn');
var warningMsgAcc = document.querySelector('#warningMsgAccomp');
var warningMsgMin = document.querySelector('#warningMsgMin');
var warningMsgSec = document.querySelector('#warningMsgSec');
var inputFields = document.querySelectorAll('.input-field');
var category;
var invalidCharacters = [
  '-',
  '+',
  'e',
];
var activityToAdd = [];

activityBtns.addEventListener('click', displayActiveActivity);

inputTimeFields.addEventListener('keydown', function(e) {
  if (invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
});

submitBtn.addEventListener('click', checkForm);



function checkForm() {
  event.preventDefault();
  var warningMsg = '<img class="warning-image" src="./assets/warning.svg"> A description is required.';
  for(var i = 0; i < inputFields.length; i++) {
    if (!inputFields[i].value && inputFields[i].id === "accomplishment") {
      warningMsgAcc.innerHTML = warningMsg;
    } else if (!inputFields[i].value && inputFields[i].id === "minutes") {
      warningMsgMin.innerHTML = warningMsg;
    } else if (!inputFields[i].value && inputFields[i].id === "seconds") {
      warningMsgSec.innerHTML = warningMsg;
    }
  }
  instantiateNewActivity();
};

function instantiateNewActivity() {
  var newActivity = new Activity(category, accomplishment.value, minutes.value, seconds.value);
  activityToAdd.push(newActivity);
}

function displayActiveActivity(e) {
  e.preventDefault();
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
