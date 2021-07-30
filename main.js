var activityBtns = document.querySelector('.actv-button-row');
var studyBtn = document.querySelector('#study-button');
var meditateBtn = document.querySelector('#meditate-button');
var exerciseBtn = document.querySelector('#exercise-button');
var inputFields = document.querySelector('.time');

var invalidCharacters = [
  '-',
  '+',
  'e',
];

activityBtns.addEventListener('click', displayActiveActivity);
inputFields.addEventListener('keydown', function(e) {
//   function eNo(e) {
//   var noE = ["e", "E"];
//   if (noE.includes(e.key)) {
//     event.preventDefault();
//   }
// }
  if (invalidCharacters.includes(e.key)) {
    e.preventDefault();
  }
})



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
