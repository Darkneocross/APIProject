var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "5RKv2XQEACjqgIkbUslzevHw9wV6Ou6zuI88giiE";
var serverTokenString = "Token " + uberServerToken;
var fifthAvenueLat = [40.746577, 40.747164,40.747798,40.748448,40.749144,40.749739,40.750389,40.750992,40.751618,40.75224,40.752835,40.753516, 40.754189, 40.754807, 40.755465, 40.75606, 40.75667, 40.757289, 40.757939, 40.758573, 40.759203, 40.759794, 40.760419, 40.761063, 40.761673, 40.762319, 40.76301];
var fifthAvenueLong = [-73.985998, -73.985502, -73.985058, -73.984562, -73.984087, -73.983632, -73.982774, -73.981862, -73.981387, -73.980932, -73.980436, -73.979961, -73.979486, -73.979052, -73.978576, -73.978101, -73.977646, -73.977212, -73.976742, -73.976295, -73.975376, -73.974917, -73.974477, -73.973978];

var startAddress;
var endAddress;

google.maps.event.addDomListener(window, 'load', intilize);
    function intilize() {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("txtautocomplete"));

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

        var place = autocomplete.getPlace();
        var location = new Array(3);
        location[0] = place.formatted_address;
        location[1] = place.geometry.location.lat();
        location[2] = place.geometry.location.lng();
        //document.getElementById('lblresult').innerHTML = location;
        console.log(location);
        });
    };

var startLatitude = "40.741549";
var startLongitude = "-73.988991";
var endLatitude = "40.741549";
var endLongitude = "-73.988991";
var count = 0;
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
            console.log(serverTokenString);
           // console.log(JSON.stringify(result, null, 2));
            var test = jQuery.parseJSON(JSON.stringify(result));
            console.log(test);
            //console.log(test.prices[0].surge_multiplier)
            var Fdatabase = firebase.database();
            //if(min % 5 == 0 ) {
                //Adding Data
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
                Fdatabase.ref(n + '/' + time + '/Counter').set({
                    counter: count
                });
                Fdatabase.ref(n + '/' + time + '/Average').set({
                     average: "temp value for now"
                });
                
                //Retrieving Data
                var ref = firebase.database().ref(n + '/' + time);
                ref.once("value")
                    .then(function(snapshot) {
                        //var a = snapshot.child(test.prices[0].surge_multiplier);
                        var a = snapshot.val();
                        console.log(a.Average.average);
            });
           // }
            
            
            
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