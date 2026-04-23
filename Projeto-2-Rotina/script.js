/*BOTAO PARA CALCULAR O TOTAL DO TEMPO BOM*/

function calcularBom(){
    
        /*pegou o valor dos 2 inputs(Hora e min)*/
    let estudoHrs = +document.getElementById("estudoHrs").value
    let estudoMins = +document.getElementById("estudoMins").value

    let leituraHrs = +document.getElementById("leituraHrs").value
    let leituraMins = +document.getElementById("leituraMins").value

/*somou as horas, somou os mins*/
    let somaBomHrs = estudoHrs + leituraHrs
    let somaBomMins = estudoMins + leituraMins 
    
    /*dividiu os min por 60 juntamente pegando a parte da hora e dps pegou os min*/
    const totalBomH = Math.floor(somaBomMins / 60)
    const totalBomM = somaBomMins % 60

    /*somou ao produto final de horas*/
    let finalBomH = somaBomHrs + totalBomH
    document.getElementById("totalBomH").innerHTML = finalBomH
    document.getElementById("totalBomM").innerHTML = totalBomM
    let horasBomEmM = somaBomHrs * 60
    let somaBomHM = horasBomEmM + somaBomMins
    /*CALCULO DAS PORCENTAGEM*/
   
}

/*BOTAO PARA CALCULAR O TOTAL DO TEMPO RUIM*/

function calcularRuim(){
    /*pegou o valor dos 4 inputs(Hora e min)*/
    let rapidoHrs = +document.getElementById("rapidoHrs").value
    let rapidoMins = +document.getElementById("rapidoMins").value

    let videoHrs = +document.getElementById("videoHrs").value
    let videoMins = +document.getElementById("videoMins").value

    let jogoHrs = +document.getElementById("jogoHrs").value
    let jogoMins = +document.getElementById("jogoMins").value

    /*somou as horas, somou os mins*/
    let somaRuimHrs = rapidoHrs + videoHrs + jogoHrs
    let somaRuimMins = rapidoMins + videoMins + jogoMins

    /*dividiu os min por 60 juntamente pegando a parte da hora e dps pegou os min*/
    const totalRuimH = Math.floor(somaRuimMins / 60)
    
    const totalRuimM = somaRuimMins % 60
    

     /*somou ao produto final de horas*/
     const finalRuimH = somaRuimHrs + totalRuimH
     document.getElementById("totalRuimH").innerHTML = finalRuimH 
     document.getElementById("totalRuimM").innerHTML = totalRuimM 
}
function calcular(){
    let finalBomH = +document.getElementById("totalBomH").innerHTML
    let totalBomM = +document.getElementById("totalBomM").innerHTML
    let finalRuimH = +document.getElementById("totalRuimH").innerHTML
    let totalRuimM = +document.getElementById("totalRuimM").innerHTML
 
let passouH = finalBomH - finalRuimH
let passouM = totalBomM - totalRuimM

if (passouM < 0){
    passouH--
    passouM = passouM + 60
}
document.getElementById("finalH").innerHTML = passouH
document.getElementById("finalM").innerHTML = passouM
/*-----------------------------------------------------CALCULO DAS PORCENTAGENS---------------------------------------------------------*/
const somaTudoB = finalBomH + (totalBomM/60)
const somaTudoR = finalRuimH + (totalRuimM/60)
const parteToda = somaTudoB + somaTudoR
const porcentagemB = (somaTudoB / parteToda)*100
const porcentagemR = (somaTudoR / parteToda)*100

document.getElementById("ladoBom").innerHTML = porcentagemB
document.getElementById("ladoRuim").innerHTML = porcentagemR
}


