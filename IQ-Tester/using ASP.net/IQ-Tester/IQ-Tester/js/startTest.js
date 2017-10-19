
var Answers = [];

(function() {

    var name = JSON.parse(localStorage.getItem('username'));
    var namePara = document.getElementById("nameid");

    namePara.innerHTML = name.toUpperCase();

    var m = document.getElementById("min");
    var s = document.getElementById("sec");

    var sec = 60;
    var min = 16;

    function clock() {


        sec--;

        if (sec <= 9) {

            s.innerHTML = "0" + sec;
        }

        if (sec >= 10) {

            s.innerHTML = sec;
        }

        if (sec == -1) {

            sec = 59;
            s.innerHTML = sec;

            min--;

            if (min <= 9) {

                m.innerHTML = "0" + min;
            }

            if (min >= 10) {

                m.innerHTML = min;
            }

            if (min == -1) {
                m.innerHTML = "0" + "0";
                s.innerHTML = "0" + "0";
                clearInterval(clear);
                checking();
            }
        }

    }

    var clear = setInterval(clock, 1000);

    //First Question

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = "One word in this list does not belong to the same group:"; 

    paragraph.innerHTML = text;
    
    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'Yen');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userFirstAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'Pound');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userFirstAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'Franc');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userFirstAns()');
    
    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'Penny');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userFirstAns()');
    
    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'Mark');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userFirstAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('Yen'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('Pound'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('Franc'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('Penny'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('Mark'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);


})();

function userFirstAns() {

    if (document.getElementById("1").checked == true) {

        Answers[0] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[0] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[0] = document.getElementById("3").value;
    }
     else if (document.getElementById("4").checked == true) {

        Answers[0] = document.getElementById("4").value;
    }
     else if (document.getElementById("5").checked == true) {

        Answers[0] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'secQuestion()');

}

//Second Question

function secQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = "I'm a male. If Albert's son is my son's father, what is the relationship between Albert and me?";

    paragraph.innerHTML = text;

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'he is my brother');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userSecondAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'he is my uncle');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userSecondAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'he is my father');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userSecondAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'he is my sister');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userSecondAns()');
    
    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'he is not related to me');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userSecondAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('he is my brother'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('he is my uncle'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('he is my father'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('he is my sister'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('he is not related to me'));
    form.appendChild(document.createElement('br'));
    
    
    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "2/20";
}

function userSecondAns() {

    if (document.getElementById("1").checked == true) {

        Answers[1] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[1] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[1] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[1] = document.getElementById("4").value;
    }
     else if (document.getElementById("5").checked == true) {

        Answers[1] = document.getElementById("5").value;
    }
    
    
    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'thirdQuestion()');

}

//Third Question

function thirdQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("Please enter the missing number: 4, 8, 14, 22, ?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '26');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userThirdAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '28');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userThirdAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '32');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userThirdAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '36');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userThirdAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', '40');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userThirdAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('26'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('28'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('32'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('38'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('40'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "3/20";

}

function userThirdAns() {

    if (document.getElementById("1").checked == true) {

        Answers[2] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[2] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[2] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[2] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[2] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'fourthQuestion()');
}

//Fourth Question

function fourthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("Please enter the missing number: 3, 6, 18, 72, ?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '144');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userFourthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '214');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userFourthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '272');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userFourthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '360');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userFourthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', '432');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userFourthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('144'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('214'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('272'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('360'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('432'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "4/20";
}

function userFourthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[3] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[3] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[3] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[3] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[3] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'fivthQuestion()');
}

//Fivth Question 

function fivthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    paragraph.style.textAlign = "left";
    paragraph.innerHTML = "A spy is trying to send a secret message, we're trying to decode his message, we need your help!" + "<br><br>" + "If (shnoppy droppy groppy)" + "<br>" + "means (mission dangerously executed) And" + "<br>" + "(swappy trappy droppy)" + "<br>" + "means (abort mission immediately) And" + "<br>" + "  (drippy groppy wippy)" + "<br>" + "means (plan executed successfully)" + "<br>" + " Then what does 'shnoppy' mean?"

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'mission');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userFivthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'dangerously');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userFivthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'executed');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userFivthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'abort');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userFivthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'successfully');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userFivthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('mission'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('dangerously'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('executed'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('abort'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('successfully'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "5/20";
}

function userFivthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[4] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[4] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[4] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[4] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[4] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'sixthQuestion()');

}

//Sixth Question

function sixthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("We have 5 dice, 4 of these dice are the same, the fifth is not. Find it!");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image = document.createElement('img');
    image.setAttribute('src', 'images/six.jpg');
    image.setAttribute('alt', 'Image');
    div.appendChild(image);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'a');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userSixthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'b');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userSixthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'c');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userSixthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'd');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userSixthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'e');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userSixthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('a'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('b'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('c'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('d'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('e'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "6/20";
}

function userSixthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[5] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[5] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[5] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[5] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[5] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'seventhQuestion()');

}

//Seventh Question 

function seventhQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/abstract1.jpg');
    image1.setAttribute('alt', 'Image');
    var image2 = document.createElement('img');
    image2.setAttribute('src', 'images/abstract2.jpg');
    image2.setAttribute('alt', 'Image');
    div.appendChild(image1);
    div.appendChild(document.createTextNode("  "));
    div.appendChild(image2);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'a');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userSeventhAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'b');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userSeventhAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'c');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userSeventhAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'd');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userSeventhAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'none of the above');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userSeventhAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('a'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('b'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('c'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('d'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('none of the above'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "7/20";
}


function userSeventhAns() {

    if (document.getElementById("1").checked == true) {

        Answers[6] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[6] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[6] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[6] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[6] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'eigthQuestion()');
}

//Eigth Question

function eigthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/SCT1.jpg');
    image1.setAttribute('alt', 'Image');
    var image2 = document.createElement('img');
    image2.setAttribute('src', 'images/SCT2.jpg');
    image2.setAttribute('alt', 'Image');
    div.appendChild(image1);
    div.appendChild(document.createTextNode("  "));
    div.appendChild(image2);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'a');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userEigthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'b');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userEigthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'c');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userEigthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'd');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userEigthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'none of the above');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userEigthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('a'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('b'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('c'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('d'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('none of the above'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "8/20";
}

function userEigthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[7] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[7] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[7] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[7] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[7] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'ninthQuestion()');
}

//Ninth Question 

function ninthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/color1.jpg');
    image1.setAttribute('alt', 'Image');
    var image2 = document.createElement('img');
    image2.setAttribute('src', 'images/color2.jpg');
    image2.setAttribute('alt', 'Image');
    div.appendChild(image1);
    div.appendChild(document.createTextNode("  "));
    div.appendChild(image2);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'a');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userNinthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'b');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userNinthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'c');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userNinthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'd');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userNinthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'none of the above');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userNinthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('a'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('b'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('c'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('d'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('none of the above'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "9/20";
}

function userNinthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[8] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[8] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[8] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[8] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[8] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'tenthQuestion()');
}

//Tenth Question

function tenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("What is the number that is one half of one quarter of one tenth of 480?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '6');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userTenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '12');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userTenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '16');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userTenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '24');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userTenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', '32');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userTenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('6'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('12'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('16'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('24'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('32'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "10/20";
}

function userTenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[9] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[9] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[9] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[9] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[9] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'eleventhQuestion()');
}

//Eleventh Question

function eleventhQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("29, 27, 24, 20, 15... What is next?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '7');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userEleventhAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '9');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userEleventhAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '10');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userEleventhAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '11');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userEleventhAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'I dont know');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userEleventhAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('7'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('9'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('10'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('11'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "11/20";
}

function userEleventhAns() {

    if (document.getElementById("1").checked == true) {

        Answers[10] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[10] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[10] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[10] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[10] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'twelfthQuestion()');
}

//Twelfth Question

function twelfthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/twelfth.jpg');
    image1.setAttribute('alt', 'Image');
    
    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'A');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userTwelfthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'B');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userTwelfthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'C');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userTwelfthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'D');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userTwelfthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'I dont know');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userTwelfthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('A'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('B'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('C'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('D'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "12/20";
}

function userTwelfthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[11] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[11] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[11] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[11] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[11] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'thirteenthQuestion()');
}

//Thirteenth Question

function thirteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("If all Bloops are Razzies and all Razzies are Lazzies, then are all Bloops definitely Lazzies?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'Yes');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userThirteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'No');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userThirteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'I dont know');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userThirteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('Yes'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('No'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));
    
    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "13/20";
}

function userThirteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[12] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[12] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[12] = document.getElementById("3").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'fourteenthQuestion()');
}

//Fourteenth Question

function fourteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/fourteenth.jpg');
    image1.setAttribute('alt', 'Image');

    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'A');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userFourteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'B');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userFourteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'C');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userFourteenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'D');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userFourteenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'E');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userFourteenthAns()');

    var six = document.createElement("input");
    six.setAttribute('type', 'radio');
    six.setAttribute('name', 'ansOne');
    six.setAttribute('value', 'F');
    six.setAttribute('id', '6');
    six.setAttribute('onclick', 'userFourteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('A'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('B'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('C'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('D'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('E'));
    form.appendChild(document.createElement('br'));
    form.appendChild(six);
    form.appendChild(document.createTextNode('F'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "14/20";
}

function userFourteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[13] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[13] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[13] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[13] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[13] = document.getElementById("5").value;
    }
    else if (document.getElementById("6").checked == true) {

        Answers[13] = document.getElementById("6").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'fifteenthQuestion()');
}

//Fifteenth Question

function fifteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/fifteenth.jpg');
    image1.setAttribute('alt', 'Image');

    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'A');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userFifteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'B');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userFifteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'C');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userFifteenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'D');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userFifteenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'E');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userFifteenthAns()');

    var six = document.createElement("input");
    six.setAttribute('type', 'radio');
    six.setAttribute('name', 'ansOne');
    six.setAttribute('value', 'F');
    six.setAttribute('id', '6');
    six.setAttribute('onclick', 'userFifteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('A'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('B'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('C'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('D'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('E'));
    form.appendChild(document.createElement('br'));
    form.appendChild(six);
    form.appendChild(document.createTextNode('F'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "15/20";
}

function userFifteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[14] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[14] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[14] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[14] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[14] = document.getElementById("5").value;
    }
    else if (document.getElementById("6").checked == true) {

        Answers[14] = document.getElementById("6").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'sixteenthQuestion()');
}

//Sixteenth Question

function sixteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    paragraph.style.textAlign = "left";
    paragraph.innerHTML = "Four (A, B, C and D) suspects were interrogated:" + "<br>" + "&nbsp" + "~A said: C won't cheat unless B cheated." + "<br>" + "&nbsp" + "~B said: Either A or B cheated." + "<br>" + "&nbsp" + "~C said: B didn't cheat, I cheated." + "<br>" + "&nbsp" + "~D said: B cheated." + "<br>" + "Only one person is lying, which of the following is correct:";

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'C lied, B cheated');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userSixteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'B lied, B cheated');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userSixteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'A lied, C cheated');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userSixteenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'D lied, C cheated');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userSixteenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'I dont know');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userSixteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('C lied, B cheated'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('B lied, B cheated'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('A lied, C cheated'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('D lied, C cheated'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "16/20";
}

function userSixteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[15] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[15] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[15] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[15] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[15] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'seventeenthQuestion()');
}

//Seventeenth Question

function seventeenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/seventeenth.jpg');
    image1.setAttribute('alt', 'Image');

    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '10');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userSeventeenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '-5');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userSeventeenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '32');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userSeventeenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '18');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userSeventeenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'I dont know');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userSeventeenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('10'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('-5'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('32'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('18'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "17/20";
}

function userSeventeenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[16] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[16] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[16] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[16] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[16] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'eighteenthQuestion()');
}

//Eighteenth Question

function eighteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Eight identically sized squares of paper have been placed on top of one another as follows. Which one is at the bottom?");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/eighteenth.jpg');
    image1.setAttribute('alt', 'Image');

    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', '2');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userEighteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', '4');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userEighteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', '6');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userEighteenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', '8');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userEighteenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'I dont know');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userEighteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('2'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('4'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('6'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('8'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('I dont know'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "18/20";
}

function userEighteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[17] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[17] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[17] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[17] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[17] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'ninteenthQuestion()');
}

//Ninteenth Question

function ninteenthQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');

    var text = document.createTextNode("Which one of the five is least like the other four?");

    paragraph.appendChild(text);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'Dog');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userNinteenthAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'Mouse');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userNinteenthAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'Lion');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userNinteenthAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'Snake');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userNinteenthAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'Elephant');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userNinteenthAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('Dog'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('Mouse'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('Lion'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('Snake'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('Elephant'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "19/20";
}

function userNinteenthAns() {

    if (document.getElementById("1").checked == true) {

        Answers[18] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[18] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[18] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[18] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[18] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'twentiethQuestion()');
}

//Twentieth Question 

function twentiethQuestion() {

    var questionDiv = document.getElementById("questionDiv");

    while (questionDiv.firstChild) {

        questionDiv.removeChild(questionDiv.firstChild);
    }

    var paragraph = document.createElement("p");
    paragraph.setAttribute('class', 'Ques');
    var text = document.createTextNode("Please find the figure continuing the series:");
    paragraph.appendChild(text);

    var div = document.createElement('div');
    div.setAttribute('class', 'pattern');
    var image1 = document.createElement('img');
    image1.setAttribute('src', 'images/twentieth.jpg');
    image1.setAttribute('alt', 'Image');

    div.appendChild(image1);

    var form = document.createElement("form");
    form.setAttribute('class', 'options');

    var one = document.createElement("input");
    one.setAttribute('type', 'radio');
    one.setAttribute('name', 'ansOne');
    one.setAttribute('value', 'A');
    one.setAttribute('id', '1');
    one.setAttribute('onclick', 'userTwenteithAns()');

    var two = document.createElement("input");
    two.setAttribute('type', 'radio');
    two.setAttribute('name', 'ansOne');
    two.setAttribute('value', 'H');
    two.setAttribute('id', '2');
    two.setAttribute('onclick', 'userTwenteithAns()');

    var three = document.createElement("input");
    three.setAttribute('type', 'radio');
    three.setAttribute('name', 'ansOne');
    three.setAttribute('value', 'C');
    three.setAttribute('id', '3');
    three.setAttribute('onclick', 'userTwenteithAns()');

    var four = document.createElement("input");
    four.setAttribute('type', 'radio');
    four.setAttribute('name', 'ansOne');
    four.setAttribute('value', 'D');
    four.setAttribute('id', '4');
    four.setAttribute('onclick', 'userTwenteithAns()');

    var five = document.createElement("input");
    five.setAttribute('type', 'radio');
    five.setAttribute('name', 'ansOne');
    five.setAttribute('value', 'F');
    five.setAttribute('id', '5');
    five.setAttribute('onclick', 'userTwenteithAns()');

    form.appendChild(one);
    form.appendChild(document.createTextNode('A'));
    form.appendChild(document.createElement('br'));
    form.appendChild(two);
    form.appendChild(document.createTextNode('H'));
    form.appendChild(document.createElement('br'));
    form.appendChild(three);
    form.appendChild(document.createTextNode('C'));
    form.appendChild(document.createElement('br'));
    form.appendChild(four);
    form.appendChild(document.createTextNode('D'));
    form.appendChild(document.createElement('br'));
    form.appendChild(five);
    form.appendChild(document.createTextNode('F'));
    form.appendChild(document.createElement('br'));

    var questionDiv = document.getElementById("questionDiv");

    questionDiv.appendChild(paragraph);
    questionDiv.appendChild(div);
    questionDiv.appendChild(form);

    document.getElementById("numberOfQuestions").innerHTML = "20/20";
}

function userTwenteithAns() {

    if (document.getElementById("1").checked == true) {

        Answers[19] = document.getElementById("1").value;
    }
    else if (document.getElementById("2").checked == true) {

        Answers[19] = document.getElementById("2").value;
    }
    else if (document.getElementById("3").checked == true) {

        Answers[19] = document.getElementById("3").value;
    }
    else if (document.getElementById("4").checked == true) {

        Answers[19] = document.getElementById("4").value;
    }
    else if (document.getElementById("5").checked == true) {

        Answers[19] = document.getElementById("5").value;
    }

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.setAttribute('onclick', 'checking()');
}

function checking() {
    
    var counter = 0;

    var actualAnswers = ["Penny", "he is my father", "32", "360", "dangerously", "d", "d", "c", "b", "6", "9", "A", "Yes", "B", "F", "C lied, B cheated", "-5", "8", "Snake", "H"]

    for (var i = 0; i < Answers.length; i++) {

        if (Answers[i] == actualAnswers[i]) {

            counter++;
        }
    }

    localStorage.setItem('correct', JSON.stringify(counter));
    window.location.assign("scores.aspx");

}

