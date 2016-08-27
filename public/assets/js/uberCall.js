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

var longCoordinates = [
                       //5th       6th         7th         8th         9th      broadway
/*31 street */    [-73.985998, -73.989166, -73.991979, -73.994819, -73.997707, -73.988336],
/*32 street */    [-73.985502, -73.988639, -73.991534, 0,          0,          -73.988186],
/*33 street */    [-73.985058, 0,          0,          0,          0,		   0,		 ],
/*34 street */    [-73.984562, -73.987776, -73.990603, -73.99343,  -73.996297, -73.987971],
/*35 street */    [-73.984087, -73.987303, -73.990136, -73.992953, -73.995817, -73.987813],
/*36 street */    [-73.983632, -73.986876, -73.989677, -73.992502, -73.995817, -73.98768 ],
/*37 street */    [-73.983198, -73.986426, -73.989226, -73.992051, -73.994892, -73.987508],
/*38 street */    [-73.982774, -73.985979, -73.988762, -73.991606, -73.994466, -73.987333],
/*39 street */    [-73.982309, -73.985543, -73.988309, -73.99115,  -73.994007, -73.9871  ],
/*40 street */    [-73.981862, -73.984981, -73.987861, -73.990699, -73.993562, -73.98688 ],
/*41 street */    [-73.981387, -73.984554, -73.987421, -73.990251, -73.993068, -73.986652],
/*42 street */    [-73.980932, -73.984052, -73.986925, -73.989771, -73.992631, -73.986416],
/*43 street */    [-73.980436, -73.983565, -73.986453, -73.989275, -73.992137, -73.986146],
/*44 street */    [-73.979961, -73.983136, -73.985976, -73.988814, -73.991676, -73.985797],
/*45 street */    [-73.979486, -73.982676, -73.985509, -73.988355, -73.99122,  -73.985618],
/*46 street */    [-73.979052, -73.982193, -73.985045, -73.987902, -73.990767, -73.985343],
/*47 street */    [-73.978576, -73.981742, -73.984586, -73.987433, -73.990311, -73.98511 ],
/*48 street */    [-73.978101, -73.981293, -73.98416,  -73.98699,  -73.989871, -73.984838],
/*49 street */    [-73.977646, -73.980861, -73.983699, -73.986534, -73.989404, -73.984495],
/*50 street */    [-73.977212, -73.980413, -73.983251, -73.986078, -73.988967, -73.984085],
/*51 street */    [-73.976742, -73.979947, -73.982784, -73.985617, -73.988468, -73.983659],
/*52 street */    [-73.976295, -73.979498, -73.982331, -73.985166, -73.988015, -73.983243],
/*53 street */    [-73.97583,  -73.979003, -73.981878, -73.984718, -73.987562, -73.982859],
/*54 street */    [-73.975376, -73.978531, -73.981406, -73.984267, -73.987085, -73.982497],
/*55 street */    [-73.974917, -73.97811,  -73.980966, -73.983795, -73.986629, -73.982223],
/*56 street */    [-73.974477, -73.977667, -73.98051,  -73.983339, -73.986181, -73.981995],
/*57 street */    [-73.973978, -73.977173, -73.980019, -73.982848, -73.985701, -73.98185 ],
/*ali way */      [0,          -73.988275, -73.991075, -73.993928, -73.996732, -73.988006],
/*broadway*/      [0,          -73.988173, -73.98568,  0,          0,          0         ]
];

var streetOneNames = [
    "31 street",
    "32 street",
    "33 street",
    "34 street",
    "35 street",
    "36 street",
    "37 street",
    "38 street",
    "39 street",
    "40 street",
    "41 street",
    "42 street",
    "43 street",
    "44 street",
    "45 street",
    "46 street",
    "47 street",
    "48 street",
    "49 street",
    "50 street",
    "51 street",
    "52 street",
    "53 street",
    "54 street",
    "55 street",
    "56 street",
    "57 street",
    "ali way",
    "broadway"
];

var streetTwoNames = [
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "broadway"
];
var startAddress;
var endAddress;

/*function getLat(topStreet) {
    for (var i = 0; i < streetOneNames.length; i++) {
        if (topStreet === streetOneNames[i]) {
            return i;
        }
    }
    return -1;
}

function getLong(botStreet) {
    for (var i = 0; i < streetTwoNames.length; i++) {
        if (botStreet === streetTwoNames[i]) {
            return i;
        }
    }
    return -1;
}*/
function searchFunction() {
    var firstStreet = document.getElementById("firstStreet").value;
    var secondStreet = document.getElementById("secondStreet").value;
    console.log(firstStreet + " " + secondStreet);
    var street = ["blank", "blank"];
    for(var i = 0; i < streetOneNames.length; i++) {
        for(var j = 0; j < streetTwoNames.length; j++) {
            if(firstStreet == streetOneNames[i] && secondStreet == streetTwoNames[j]) {
                street[0] = latCoordinates[i][j];
                street[1] = longCoordinates[i][j];
                console.log(street[0] + " " + street[1]);
            }
        }
    }
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
    if(street[0] != "blank" && street[1] != "blank") {
        if(street[0] != 0 && street[1] != 0) {
            console.log("test");
            console.log(n);
            console.log(time);
            var ref = firebase.database().ref(n + '/' + time);
            ref.once("value")
                .then(function(snapshot) {
                    //var a = snapshot.child(test.prices[0].surge_multiplier);
                    var a = snapshot.val();
                    console.log(a.Average.average);
                    //console.log(a.Average.average);
                    //var b = a.Counter.counter;
                    //b = b + 1;
                    //console.log(b);
                });
        }
    }
    
}
var testLat;
var testLong;
var startLatitude = "40.741549";
var startLongitude = "-73.988991";
var endLatitude = "40.741549";
var endLongitude = "-73.988991";
var count = 0;
var timer;
/*var config = {
                apiKey: "AIzaSyCF5YfgPwzbEsqRYz0KkJ_S9zuso_1JBHI"
                , authDomain: "uberlytics-project.firebaseapp.com"
                , databaseURL: "https://uberlytics-project.firebaseio.com"
                , storageBucket: "uberlytics-project.appspot.com"
            , };
            firebase.initializeApp(config);

*/
$( document ).ready(function() {
    console.log( "ready!" );
    if (typeof timer === typeof undefined) {
        timer = setInterval(function () {
            getEstimatesForUserLocation(startLatitude, startLongitude);
        }, 60000);
        for(var i = 0; i < streetOneNames.length; i++) {
            for(var j = 0; j < streetTwoNames.length; j++) {
                testLat = latCoordinates[i][j];
                testLong = longCoordinates[i][j];
                console.log(testLat + " " + testLong);
                //getEstimatesForUserLocation(testLat, testLong);
            }
        }
        getEstimatesForUserLocation(startLatitude, startLongitude);
}
});

function getEstimatesForUserLocation(latitude, longitude) {
    $.ajax({

        url: "https://api.uber.com/v1/estimates/price?start_latitude=" + startLatitude + "&start_longitude=" + startLongitude + "&end_latitude=" + endLatitude + "&end_longitude=" + endLongitude + "",
        //url: "https://api.uber.com/v1/estimates/price?start_latitude=40.741549&start_longitude=-73.988991&end_latitude=40.741549&end_longitude=-73.988991",
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
            for(var i = 0; i < test.prices.length; i++) {    
                Fdatabase.ref(n + '/' + time + '/' + test.prices[i].display_name).set({
                    surgePrice: test.prices[i].surge_multiplier
                });
            }
            /*    Fdatabase.ref(n + '/' + time + '/' + test.prices[1].display_name).set({
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
                */
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
                        console.log(a);
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