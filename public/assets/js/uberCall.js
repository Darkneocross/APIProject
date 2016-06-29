var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "E6Kt0x-U0uI652EaCOLvFPXGfgSEXrNwF_ycpfu5";
var startLatitude = "40.741549";
var startLongitude = "-73.988991";
var endLatitude = "40.741549";
var endLongitude = "-73.988991";

function getEstimatesForUserLocation(latitude, longitude) {
    $.ajax({
        url: "https://api.uber.com/v1/estimates/price?start_latitude=" + startLatitude + "&start_longitude=" + startLongitude + "&end_latitude=" + endLatitude + "&end_longitude=" + endLongitude, // REMINDER:
        // Add in latitude and longitude of location to 
        // url call
        headers: {
            Authorization: "Token " + uberServerToken
        }
        , success: function (result) {
            console.log(JSON.stringify(result));
            var json = JSON.parse(result);
            var data = [];
            for (var i = 0; i < 20; i++) {
                if (typeof json.prices[i] != typeof undefined) {
                    data[i] = json.prices[i].surge_multiplier;
                }
            }
            if (typeof data != typeof undefined) {
                console.log(data);
            }
        }
    });
}