var clickImg = document.getElementsByClassName("clicker")[0];
var timeShower = document.getElementsByClassName("timeShower")[0];
var clickTimes = 0;

timeShower.innerText = clickTimes;

clickImg.addEventListener('click', function () {
    clickTimes++;
    timeShower.innerText = clickTimes;
});
