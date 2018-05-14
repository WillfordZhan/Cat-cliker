var clickImg1 = document.getElementsByClassName("clicker1")[0];
var clickImg2 = document.getElementsByClassName("clicker2")[0];
var timeShower1 = document.getElementsByClassName("timeShower1")[0];
var timeShower2 = document.getElementsByClassName("timeShower2")[0];
var clickTimes1 = 0;
var clickTimes2 = 0;


timeShower1.innerText = clickTimes1;
timeShower2.innerText = clickTimes2;

clickImg1.addEventListener('click', function () {
    clickTimes1++;
    timeShower1.innerText = clickTimes1;
});

clickImg2.addEventListener('click', function () {
    clickTimes2++;
    timeShower2.innerText = clickTimes2;
});
