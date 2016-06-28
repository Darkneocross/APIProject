var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "E6Kt0x-U0uI652EaCOLvFPXGfgSEXrNwF_ycpfu5";

var startLatitude;
var startLongitude;
var endLatitude;
var endLongitude;

function getEstimatesForUserLocation(latitude,longitude) {
    $.ajax({
        url: "https://api.uber.com/v1/estimates/price",
        // REMINDER:
        // Add in latitude and longitude of location to 
        // url call
        headers: {
            Authorization: "Token " + uberServerToken
        },
        /*data: {
            
        }*/
        success: function(result) {
            console.log(JSON.stringify(result));
            
        }
    });
}