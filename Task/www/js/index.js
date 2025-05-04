function calculerIMC(){
    const poids = document.getElementById("poids");
    const taille = document.getElementById("taille");

    const imc = poids.value / Math.pow(taille.value,2);

    let interpretation = "Vous etes en etat" ;

    if(imc<16.5){
        interpretation += "de denutrition" ;
    }
    else if(imc>=16.5 && imc<18.5){
        interpretation += "de maigreur" ;
    }
    else if(imc>=18.5 && imc<25){
        interpretation = "vous avez un poids normal" ;
    }
    else if(imc>=25 && imc<30){
        interpretation += "sur poids" ;
    }
    else if(imc>=30 && imc<35){
        interpretation += "obeisite moderee" ;
    }
    else if(imc>=35 && imc<40){
        interpretation += "obeisite severe" ;
    }
    else if(imc>=40){
        interpretation += "obeisite norbide ou massive" ;
    }

    const resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = `votre imc est de ${imc}<hr>${interpretation}`;




}