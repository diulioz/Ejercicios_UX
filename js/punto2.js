function calcularp2(){
    evt.preventDefault();
    let h=parseInt(document.getElementById("txtn1").value);
    let m=parseInt(document.getElementById("txtn2").value);
    let s=parseInt(document.getElementById("txtn3").value); 

    let tiempoSeg = h*3600 + m*60 + s;
    
    let arcRad = ((2*Math.PI)/86400) * tiempoSeg;
    let grados = arcRad*(180/Math.PI);
    let gradosDecimales = grados - Math.floor(grados);
    let minutos = gradosDecimales*60;
    let minutosDecimales = minutos - Math.floor(minutos);
    let segundos = minutosDecimales*60;
    
    alert("El resultado es Grados : " + Math.floor(grados) + " Minutos : " + Math.floor(minutos) + " Segundos : " + segundos)

}

function calcular(){

    let h, m, s,horas, grados, grados2, minutos, minutos2, segundos;
    h=parseInt(document.getElementById("txtn1").value);
    m=parseInt(document.getElementById("txtn2").value);
    s=parseInt(document.getElementById("txtn3").value); 
    horas= h + (m/60) + (s/3600);
    grados= ((horas * 360)/24);
    grados2= grados - Math.floor(grados);
    minutos= grados2 * 60;
    minutos2 = minutos - Math.floor(minutos);
    segundos= minutos2 * 60;

    cad = "Resultado= " + Math.trunc(grados) + " ° " + Math.trunc(minutos,2) + " ' "+ Math.trunc(segundos,2) + " '' ";
    alert(cad);
}