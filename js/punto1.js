function retirar(evt){
    evt.preventDefault();
    let a;
    r1=0;
    r2=0;
    let cad= "";
    let cad_2="";
    let cad_3="";
    let cad_4="";
    let cad_5="";
    let cadf="";
    a=parseInt(document.getElementById("txtn1").value);

    if(a>50000){
            r2=a%50000;
            a=a-r2;
            r1=a/50000
            cad=r1 +" Billetes de $50000 \n";
        if (r2>=20000){
            a=r2;
            r2=r2%20000;
            a=a-r2;
            r1=a/20000
            cad_2=" "+ r1 +" Billetes de $20000\n"
        }
        if(r2>=10000){
            a=r2;
            r2=r2%10000;
            a=a-r2;
            r1=a/10000
            cad_3=" "+ r1 +" Billetes de $10000\n"
        }
        if(r2>=5000){
            a=r2;
            r2=r2%5000;
            a=a-r2;
            r1=a/5000
            cad_4=" "+ r1 +" Billetes de $5000\n"
        }
        if(r2<5000){
            cad_5="Sobran $" + r2;
        }
    }

    cadf=cad+cad_2+cad_3+cad_4+cad_5;

    alert(cadf);
}