var uberClientId = "5uROnzkiqJnVpj6BWRBUmP1l00oaRYe5";
var uberServerToken = "E6Kt0x-U0uI652EaCOLvFPXGfgSEXrNwF_ycpfu5";

$.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "Token " + uberServerToken;
    },
    data: {
        
    },
    success: function(result) {
        console.log(result);
        
        var data = result["prices"];
        if (typeof data != typeof undefined) {
            
        }
    }
});