
function signIn(){
    
 var text1 = document.getElementById("Text1").value;
 var text2 = document.getElementById("Text2").value;
 
 var userName = text1 + " " +text2;
 
 localStorage.setItem('username', JSON.stringify(userName));

}