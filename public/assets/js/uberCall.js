var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "5RKv2XQEACjqgIkbUslzevHw9wV6Ou6zuI88giiE";
var serverTokenString = "Token " + uberServerToken;
var latCoordinates = [
            //5th       6th         7th         8th         9th    broadway
/*31 street */    [40.746577, 40.747894, 40.749055, 40.750238, 40.751463, 40.747512],
/*32 street */    [40.747164, 40.748518, 40.749666, 0,         0,         40.748282],
/*33 street */    [40.747798, 0,         0,         0,         0,         0,       ],
/*34 street */    [40.748448, 40.749791, 40.750961, 40.752144, 40.753352, 40.74984 ],
/*35 street */    [40.749144, 40.750496, 40.751627, 40.752812, 40.754016, 40.750667],
/*36 street */    [40.749739, 40.751126, 40.752243, 40.75343,  40.754016, 40.75141 ],
/*37 street */    [40.750389, 40.751711, 40.752857, 40.754046, 40.755271, 40.752135],
/*38 street */    [40.750992, 40.752355, 40.753473, 40.754662, 40.755862, 40.752881],
/*39 street */    [40.751618, 40.752986, 40.754085, 40.755286, 40.75649,  40.753576],
/*40 street */    [40.75224,  40.753562, 40.754701, 40.755902, 40.757108, 40.754297],
/*41 street */    [40.752835, 40.754156, 40.755329, 40.75652,  40.757799, 40.755006],
/*42 street */    [40.753516, 40.754861, 40.755983, 40.757174, 40.758378, 40.755776],
/*43 street */    [40.754189, 40.755523, 40.756653, 40.757859, 40.759061, 40.756554],
/*44 street */    [40.754807, 40.756096, 40.757297, 40.758491, 40.759693, 40.757222],
/*45 street */    [40.755465, 40.756721, 40.757917, 40.759117, 40.760319, 40.75797 ],
/*46 street */    [40.75606,  40.757402, 40.758535, 40.759743, 40.760945, 40.758659],
/*47 street */    [40.75667,  40.758034, 40.759155, 40.760365, 40.761577, 40.759384],
/*48 street */    [40.757289, 40.758653, 40.759793, 40.760993, 40.762203, 40.760089],
/*49 street */    [40.757939, 40.759222, 40.760415, 40.761615, 40.762831, 40.760757],
/*50 street */    [40.758573, 40.759842, 40.761061, 40.762243, 40.763449, 40.761401],
/*51 street */    [40.759203, 40.760493, 40.761683, 40.762869, 40.764083, 40.762029],
/*52 street */    [40.759794, 40.761107, 40.762307, 40.763499, 40.764688, 40.762685],
/*53 street */    [40.760419, 40.761784, 40.762925, 40.764131, 40.765314, 40.763343],
/*54 street */    [40.761063, 40.762422, 40.763563, 40.764751, 40.765936, 40.764007],
/*55 street */    [40.761673, 40.762985, 40.764177, 40.765371, 40.766568, 40.764712],
/*56 street */    [40.762319, 40.763601, 40.764805, 40.766005, 40.767192, 40.765431],
/*57 street */    [40.76301,  40.764296, 40.765498, 40.766684, 40.767879, 40.766268],
/*ali way */      [0,         40.749145, 40.750284, 40.751465, 40.752726, 40.749018],
/*broadway*/      [0,         40.749161, 40.757717, 0,         0,         0,       ]
];

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
                        //console.log(a.Average.average);
                        var b = a.Counter.counter;
                        b = b + 1;
                        console.log(b);
                });
                Fdatabase.ref(n + '/' + time + '/Counter').set({
                    counter: count
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