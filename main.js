var activityBtns = document.querySelector('.buttons');
var studyBtn = document.querySelector('#Study');
var meditateBtn = document.querySelector('#Meditate');
var exerciseBtn = document.querySelector('#Exercise');
activityBtns.addEventListener('click', displayActiveActivity);



function displayActiveActivity(event) {
  var btnID = event.target.id;
  if (btnID === "Study") {
    event.target.className += ' study-btn';
    meditateBtn.classList.remove('meditate-btn');
    exerciseBtn.classList.remove('excercise-btn');
  } else if (btnID === "Meditate") {
    event.target.className += ' meditate-btn';
    studyBtn.classList.remove('study-btn');
    exerciseBtn.classList.remove('excercise-btn');
  } else if (btnID === "Exercise") {
    event.target.className += ' excercise-btn';
    meditateBtn.classList.remove('meditate-btn');
    studyBtn.classList.remove('study-btn');
  }
};
