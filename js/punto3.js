function suma(evt){
    evt.preventDefault();
    let h,m,s,su,aux, auxm, auxh, auxs;
    let r_horas=0;
    let r_minutos=0;
    let r_seg=0;
    let cadH= "";
    let cadM= "";
    let cadS= "";
    let cadf= "";

    h=parseInt(document.getElementById("txtn1").value);
    m=parseInt(document.getElementById("txtn2").value);
    s=parseInt(document.getElementById("txtn3").value);
    su=parseInt(document.getElementById("txtn4").value);
    cadH= " "+ h + " h";
    cadM= " "+ m + " m";
    cadS= " "+ s + " s";

    if(su>=3600){
        auxh=su%3600;
        aux=auxh;
        r_horas=su-aux;
        r_horas=r_horas/3600;
        h=h+r_horas;
        cadH= " "+ h + " h";
    }    

    if(su>59 & su<3600){
        aux=su%60;
        r_minutos=su-aux;
        r_minutos=r_minutos/60;
        m=m+r_minutos;
        if (m>59){
            h=h+1;
            cadH= " "+ h + " h";
            auxm=m%60;
            m=auxm;
            cadM= " "+ auxm + " m"
        }else{
            cadM= " "+ m + " m";
        }
    }

    if(aux>59 & aux<3600){
        auxm=aux%60;
        r_minutos=aux-auxm;
        aux=auxm;
        r_minutos=r_minutos/60;
        m=m+r_minutos;
        if (m>59){
            h=h+1;
            cadH= " "+ h + " h";
            auxm=m%60;
            m=auxm;
            cadM= " "+ auxm + " m"
        }else{
            cadM= " "+ m + " m";
        }
    }

    if (su<60){
        if((s+su)<60){
            s=s+su;
            cadS= " "+ s + " s";
        }else{
            auxs = s+su;
            auxs=auxs%60;
            s=auxs;
            m=m+1;
            cadM= " "+ m + " m"
            cadS= " "+ s + " s";
        }
    }

    if (aux<60){
        if((aux+s)<60){
            s=aux+s;
            cadS= " "+ s + " s";
        }else{
            auxs = s+aux;
            auxs=auxs%60;
            s=auxs;
            m=m+1;
            cadM= " "+ m + " m"
            cadS= " "+ s + " s";
        }
    }

    cadf=cadH+cadM+cadS;
    alert(cadf);
}