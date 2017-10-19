
(function() {

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDI4Kf_f03d5bLrPE7SL0zDmP1gj82DkpI",
        authDomain: "iq-tester.firebaseapp.com",
        databaseURL: "https://iq-tester.firebaseio.com",
        storageBucket: "iq-tester.appspot.com",
        messagingSenderId: "365610359860"
    };
    firebase.initializeApp(config);


    var name = JSON.parse(localStorage.getItem('username'));
    var namePara = document.getElementById("nameid");
    namePara.innerHTML = name.toUpperCase();

    var noc = parseInt(JSON.parse(localStorage.getItem('correct')));

    var donoc = noc * noc;

    var specfic, PK;

    var allchildRef = firebase.database().ref();

    allchildRef.limitToLast(1).once('value', function(snap) {

        specfic = JSON.stringify(snap.val());

        PK = parseInt(specfic.slice(2, 3));

        PK++;

        var addingScore = firebase.database().ref().child(PK);

        addingScore.set({

            Xvalue: noc,
            XSvalue: donoc

        });
        
        console.log("debug");
        
        var Xnum = 0, XSnum = 0;

        var refer = firebase.database().ref();
        refer.on('value', function(snap) {

            var numOfData = JSON.stringify(snap.numChildren());
            localStorage.setItem('TotalAtmpt', JSON.stringify(numOfData));

            for (var i = 1; i <= parseInt(numOfData); i++) {

                firebase.database().ref(i).child('Xvalue').once('value', function(snap) {

                    Xnum = Xnum + parseInt(JSON.stringify(snap.val()));

                });

                firebase.database().ref(i).child('XSvalue').once('value', function(snap) {

                    XSnum = XSnum + parseInt(JSON.stringify(snap.val()));

                });

            }

            localStorage.setItem('Xtotal', JSON.stringify(Xnum));
            localStorage.setItem('XStotal', JSON.stringify(XSnum));


        });


    });


})();









