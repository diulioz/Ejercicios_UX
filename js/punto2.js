function calcular(evt){
    evt.preventDefault();

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