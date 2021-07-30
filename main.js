var activityBtns = document.querySelector('.actv-button-row');
var studyBtn = document.querySelector('#study-button');
var meditateBtn = document.querySelector('#meditate-button');
var exerciseBtn = document.querySelector('#exercise-button');
var inputFields = document.querySelector('.time');
var accomplishment = document.querySelector('#accomplishment');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var submitBtn = document.querySelector('.start-btn');
var warningMsgAcc = document.querySelector('.warning-message');

var invalidCharacters = [
  '-',
  '+',
  'e',
];

activityBtns.addEventListener('click', displayActiveActivity);
inputFields.addEventListener('keydown', function(e) {
  if (invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
});
submitBtn.addEventListener('click', checkForm);

function checkForm() {
  event.preventDefault();
  if (!accomplishment.value) {
    warningMsgAcc.classList.remove('hidden');
  }
};

// Goal:  Show an error message when accomplishment, minutes or seconds field are empty.  We
//        want the message to appear under whichever field is empty.

// Input: .value from all fields.  Submit button (event listener).

// Output: Warning message. CSS styling for message.

// Steps:  Access values from the input fields.
//         Add event listener for the submit button.
//         Add event handler for submit button.  This button will check if any of the fields
// are empty.  If a field is empty, display an error message on the fields that do not have
// an input.  It should also change the color of the input line.

function displayActiveActivity(e) {
  e.preventDefault();
  var btnID = event.target.id;
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
