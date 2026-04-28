/*BUTTON TO CALCULATE PRODUCTIVE TIME TOTAL*/

function calculateGood(){
        /*got the value from the 2 inputs (Hour and min)*/
    let studyHrs = +document.getElementById("studyHrs").value
    let studyMins = +document.getElementById("studyMins").value

    let readingHrs = +document.getElementById("readingHrs").value
    let readingMins = +document.getElementById("readingMins").value

    /*checking if inputs are negative*/
if (studyHrs < 0 || readingHrs < 0){
    document.getElementById("totalGoodH").innerHTML = "INVALID INPUT"
return;}
if (studyMins < 0 || readingMins < 0){
 document.getElementById("totalGoodM").innerHTML = "INVALID INPUT"
return;}
    /*if not continue*/

/*summed the hours, summed the mins*/
    let sumGoodHrs = studyHrs + readingHrs
    let sumGoodMins = studyMins + readingMins 
    
    /*divided mins by 60 to get hours and then got the remaining mins*/
    const totalGoodH = Math.floor(sumGoodMins / 60)
    let finalGoodH = sumGoodHrs + totalGoodH
    const totalGoodM = sumGoodMins % 60
    console.log("terminaram")

    /*added to the final hour product*/
   document.getElementById("totalGoodH").innerHTML = finalGoodH 
    document.getElementById("totalGoodM").innerHTML = totalGoodM
}
/*BUTTON TO CALCULATE UNPRODUCTIVE TIME TOTAL*/

function calculateBad(){
    /*got the value from the 4 inputs (Hour and min)*/
    let shortHrs = +document.getElementById("shortHrs").value
    let shortMins = +document.getElementById("shortMins").value

    let videoHrs = +document.getElementById("videoHrs").value
    let videoMins = +document.getElementById("videoMins").value

    let gamingHrs = +document.getElementById("gamingHrs").value
    let gamingMins = +document.getElementById("gamingMins").value

    /*checking if inputs are negative*/
if (shortHrs < 0 || videoHrs < 0 || gamingHrs < 0){
    document.getElementById("totalBadH").innerHTML = "INVALID INPUT"
return;}
if (shortMins < 0 || videoMins < 0 || gamingMins < 0){
    document.getElementById("totalBadM").innerHTML = "INVALID INPUT"
return;}
    /*if not continue*/
console.log("começou soma")
    /*summed the hours, summed the mins*/
    let sumBadHrs = shortHrs + videoHrs + gamingHrs
    let sumBadMins = shortMins + videoMins + gamingMins

    /*divided mins by 60 to get hours and then got the remaining mins*/
    const totalBadH = Math.floor(sumBadMins / 60)
    
    const totalBadM = sumBadMins % 60
    

     /*added to the final hour product*/
   document.getElementById("totalBadH").innerHTML = totalBadH 
   document.getElementById("totalBadM").innerHTML = totalBadM
}
function calculate(){
    let finalGoodH = +document.getElementById("totalGoodH").innerHTML
    let totalGoodM = +document.getElementById("totalGoodM").innerHTML
    let finalBadH = +document.getElementById("totalBadH").innerHTML
    let totalBadM = +document.getElementById("totalBadM").innerHTML
 
let exceededH = finalGoodH - finalBadH
let exceededM = totalGoodM - totalBadM


document.getElementById("numFinalH").innerHTML = exceededH
document.getElementById("numFinalM").innerHTML = exceededM


/*-----------------------------------------------------PERCENTAGE CALCULATIONS---------------------------------------------------------*/
const sumAllGood = finalGoodH + (totalGoodM/60)
const sumAllBad = finalBadH + (totalBadM/60)
const totalAll = sumAllGood + sumAllBad
const percentageGood = Math.floor((sumAllGood / totalAll)*100)
const percentageBad = Math.floor((sumAllBad / totalAll)*100)
if (totalAll === 0){
    document.getElementById("percentage1").innerHTML = 0
    document.getElementById("percentage2").innerHTML = 0
}else{

document.getElementById("percentage1").innerHTML = percentageGood
document.getElementById("percentage2").innerHTML = percentageBad
}

}


