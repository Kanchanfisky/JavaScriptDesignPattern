var elem = document.getElementsByTagName("img")[0];
var noOfClicks = 0;
elem.addEventListener('click', getNoOfClicks, false);

function getNoOfClicks(){
    noOfClicks++;
    document.getElementById('noofclicks').innerHTML = noOfClicks;
}