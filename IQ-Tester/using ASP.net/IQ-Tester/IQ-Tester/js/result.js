(function() {
    
    var name = JSON.parse(localStorage.getItem('username'));
    var namePara = document.getElementById("nameid");
    namePara.innerHTML = name.toUpperCase();
    
    var numOfCorrect = parseInt(JSON.parse(localStorage.getItem('correct')));

    var sumOfX = parseInt(JSON.parse(localStorage.getItem('Xsum')));
    var sumOfX_square = parseInt(JSON.parse(localStorage.getItem('XSsum')));
    var numOfTestGiven = parseInt(JSON.parse(localStorage.getItem('TotalAtmpt')));
    
    var MEAN = sumOfX / numOfTestGiven;
    var variance = (sumOfX_square / numOfTestGiven) - Math.pow((sumOfX / numOfTestGiven), 2);
    var SD = Math.sqrt(variance);
    
    var z_score = (numOfCorrect - MEAN) / SD;
    var IQ = 100 + (z_score * 15);
    
    document.getElementById("userIQ").innerHTML = IQ.toFixed(2);
    
    var IntelligenceQ = IQ.toFixed(2);

    if(IntelligenceQ >= 140){
        
        document.getElementById("numberOfCorrect").innerHTML = "Genius or near genius";
    }
    else if(IntelligenceQ >= 120  && IntelligenceQ < 140){

        document.getElementById("numberOfCorrect").innerHTML = "Very superior intelligence";
    }
    else if(IntelligenceQ >= 110 && IntelligenceQ < 120){

        document.getElementById("numberOfCorrect").innerHTML = "Superior intelligence";
    }
    else if(IntelligenceQ >=90 && IntelligenceQ < 110){
        
        document.getElementById("numberOfCorrect").innerHTML = "Normal or average intelligence";
    }
    else if (IntelligenceQ >= 80 && IntelligenceQ < 90) {

        document.getElementById("numberOfCorrect").innerHTML = "Dullness";
    }
    else if (IntelligenceQ >= 70 && IntelligenceQ < 80) {

        document.getElementById("numberOfCorrect").innerHTML = "Borderline deficiency";
    }
    else if (IntelligenceQ < 70) {

        document.getElementById("numberOfCorrect").innerHTML = "Definite feeble-mindedness";
    }
    
})();


function UserOut(){
    
    window.location.assign("index.html");
}

