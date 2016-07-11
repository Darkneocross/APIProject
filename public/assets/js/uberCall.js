var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "5RKv2XQEACjqgIkbUslzevHw9wV6Ou6zuI88giiE";
var serverTokenString = "Token " + uberServerToken;


var startAddress;
var endAddress;
function searchCoordinates() {
    startAddress = document.getElementById("startAddress").value;
    endAddress = document.getElementById("endAddress").value;
    console.log(startAddress);
    console.log(endAddress);
    //var url = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC77ENHFU4GW1hGE3UXfvGVwj1kPoe3MHA";
}

var startLatitude = "40.741549";
var startLongitude = "-73.988991";
var endLatitude = "40.741549";
var endLongitude = "-73.988991";
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var t = d.getHours();
var min = d.getMinutes();
var time;
if(min < 10) {
    time = t + ':0' + min;
} else {
    time = t + ':' + min;
}
//time = t + ':' + d.getMinutes();
console.log(time);
var timer;
var config = {
                apiKey: "AIzaSyCF5YfgPwzbEsqRYz0KkJ_S9zuso_1JBHI"
                , authDomain: "uberlytics-project.firebaseapp.com"
                , databaseURL: "https://uberlytics-project.firebaseio.com"
                , storageBucket: "uberlytics-project.appspot.com"
            , };
            firebase.initializeApp(config);


$( document ).ready(function() {
    console.log( "ready!" );
    if (typeof timer === typeof undefined) {
        timer = setInterval(function () {
            getEstimatesForUserLocation(startLatitude, startLongitude);
        }, 60000);
        getEstimatesForUserLocation(startLatitude, startLongitude);
}
});

function getEstimatesForUserLocation(latitude, longitude) {
    $.ajax({
        /*url: "https://api.uber.com/v1/estimates/price?start_latitude=" + startLatitude + "&start_longitude=" + startLongitude + "&end_latitude=" + endLatitude + "&end_longitude=" + endLongitude + "",*/
        url: "https://api.uber.com/v1/estimates/price?start_latitude=40.741549&start_longitude=-73.988991&end_latitude=40.741549&end_longitude=-73.988991",
        // REMINDER:
        // Add in latitude and longitude of location to 
        // url call
        headers: {
            'Authorization': serverTokenString
        },
        success: function (result) {
            console.log(serverTokenString);
           // console.log(JSON.stringify(result, null, 2));
            var test = jQuery.parseJSON(JSON.stringify(result));
            console.log(test);
            //console.log(test.prices[0].surge_multiplier)
            var Fdatabase = firebase.database();
            //if(min % 5 == 0 ) {
                Fdatabase.ref(n + '/' + time + '/' + test.prices[0].display_name).set({
                    surgePrice: test.prices[0].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[1].display_name).set({
                    surgePrice: test.prices[1].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' +    test.prices[2].display_name).set({
                    surgePrice: test.prices[2].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[3].display_name).set({
                    surgePrice: test.prices[3].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[4].display_name).set({
                    surgePrice: test.prices[4].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[5].display_name).set({
                    surgePrice: test.prices[5].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[6].display_name).set({
                    surgePrice: test.prices[6].surge_multiplier
                });
                Fdatabase.ref(n + '/' + time + '/' + test.prices[7].display_name).set({
                    surgePrice: test.prices[7].surge_multiplier
                });
            //}
            //console.log(test.prices[0].display_name);
            //console.log(JSON.parse(result));
            /*var json = JSON.parse(result);
            var data = [];
            for (var i = 0; i < 20; i++) {
                if (typeof json.prices[i] != typeof undefined) {
                    data[i] = json.prices[i].surge_multiplier;
                }
            }
            if (typeof data != typeof undefined) {
                console.log(data);
            }*/
        }
    });
}
/*function putDataInDataBase() {
    var config = {
        apiKey: "AIzaSyCF5YfgPwzbEsqRYz0KkJ_S9zuso_1JBHI"
        , authDomain: "uberlytics-project.firebaseapp.com"
        , databaseURL: "https://uberlytics-project.firebaseio.com"
        , storageBucket: "uberlytics-project.appspot.com"
    , };
    firebase.initializeApp(config);
    var Fdatabase = firebase.database();
    Fdatabase.ref('Monday').set({
        value: "2.0",
    });
}*/