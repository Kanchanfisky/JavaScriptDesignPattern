let elemsArray = document.getElementsByClassName("catimage");
//let firstcatelement = document.getElementsByTagName("img")[0];
let noOfClicks = 0;
let firstCatName = "Andy";
let secondCatName = "Tom";


document.getElementById('name_firstcat').innerHTML = firstCatName;
document.getElementById('name_secondcat').innerHTML = secondCatName;
// params : 
function addEventListenerToCatArray(cathtmlElementArray){
    for ( let i =0; i < cathtmlElementArray.length; i++){
        cathtmlElementArray[i].addEventListener('click', getNoOfClicks, false);
    }
}


function getNoOfClicks(){
    noOfClicks++;
    document.getElementById('noofclicks').innerHTML = noOfClicks;
}

addEventListenerToCatArray(elemsArray);