
(function () {

    var userCorrectAns = JSON.parse(localStorage.getItem('correct'));
    var hiddenBox1 = document.getElementById("HiddenField1");
    var hiddenBox2 = document.getElementById("HiddenField2");

    hiddenBox1.value = userCorrectAns;
    hiddenBox2.value = userCorrectAns * userCorrectAns;       
    
})();

function saveLocal() {

   var Xdata = document.getElementById("TotalX").value;
   var XSdata = document.getElementById("TotalXS").value;
   var TotalAttempt = document.getElementById("TotalR").value;

   localStorage.setItem('Xsum', JSON.stringify(Xdata) );
   localStorage.setItem('XSsum', JSON.stringify(XSdata));
   localStorage.setItem('TotalAtmpt', JSON.stringify(TotalAttempt));

   document.location.assign("IQresult.html");
    
}